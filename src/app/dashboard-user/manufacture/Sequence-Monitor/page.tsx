"use client";

import { useState, useEffect } from "react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Play,
  Pause,
  SkipForward,
  ListOrdered,
  Table,
  LayoutGrid,
} from "lucide-react";

interface Sequence {
  id: string;
  model: string | undefined;
  vinNumber: string;
  suffix: string;
  startTime: string;
  estimatedEndTime?: string;
  endTime?: string;
  completionTime: string;
  status: "running" | "completed" | "queued" | "idle";
  completionPercentage?: number;
  batchSize: number;
  duration: number;
  completed?: number;
  estimatedDuration?: number;
  issues?: string[];
}

interface SequenceState {
  current: Sequence;
  queue: Sequence[];
  history: Sequence[];
}

// Generate a random VIN number
const generateVIN = () => {
  const characters = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789";
  let vin = "";
  for (let i = 0; i < 17; i++) {
    vin += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return vin;
};

// Generate a random suffix
const generateSuffix = () => {
  const suffixes = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"];
  return (
    suffixes[Math.floor(Math.random() * suffixes.length)] +
    Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0")
  );
};

// Generate a large dataset for simulation
const generateSequenceData = (): SequenceState => {
  const models = ["X-100", "X-200", "X-300", "X-500", "X-700", "X-900"];

  // Generate history sequences (completed)
  const history = [];
  const now = new Date();
  let endTime = new Date(now.getTime() - 30 * 60000); // 30 minutes ago

  for (let i = 0; i < 30; i++) {
    const model = models[Math.floor(Math.random() * models.length)];
    const duration = 30 + Math.floor(Math.random() * 90); // 30-120 minutes
    const startTime = new Date(endTime.getTime() - duration * 60000);
    const batchSize = (50 + Math.floor(Math.random() * 10)) * 10; // 500-1000 in steps of 10

    history.push({
      id: `SEQ-2023-${(5 - Math.floor(i / 10)).toString().padStart(2, "0")}-${(1000 - i).toString().padStart(3, "0")}`,
      model,
      vinNumber: generateVIN(),
      suffix: generateSuffix(),
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
      estimatedEndTime: endTime.toISOString(),
      completionTime: formatDate(endTime),
      status: "completed" as const,
      batchSize,
      duration,
      completed:
        Math.random() > 0.2
          ? batchSize
          : batchSize - Math.floor(Math.random() * 5),
      completionPercentage: 100,
      issues: Math.random() > 0.8 ? ["Material shortage"] : [],
    });

    endTime = startTime;
  }

  // Current sequence
  const currentDuration = 45 + Math.floor(Math.random() * 60); // 45-105 minutes
  const currentStartTime = new Date(now.getTime() - 15 * 60000); // Started 15 minutes ago
  const currentEndTime = new Date(
    currentStartTime.getTime() + currentDuration * 60000,
  );
  const currentModel = models[Math.floor(Math.random() * models.length)];
  const currentBatchSize = (50 + Math.floor(Math.random() * 10)) * 10;

  const current = {
    id: "SEQ-2023-05-001",
    model: currentModel,
    vinNumber: generateVIN(),
    suffix: generateSuffix(),
    startTime: currentStartTime.toISOString(),
    estimatedEndTime: currentEndTime.toISOString(),
    completionTime: "", // Will be filled when completed
    status: "running" as const,
    completionPercentage: 35,
    batchSize: currentBatchSize,
    duration: currentDuration,
    completed: Math.floor(currentBatchSize * 0.35),
  };

  // Queue sequences
  const queue = [];
  let queueStartTime = currentEndTime;

  for (let i = 0; i < 30; i++) {
    const model = models[Math.floor(Math.random() * models.length)];
    const duration = 30 + Math.floor(Math.random() * 90); // 30-120 minutes
    const batchSize = (50 + Math.floor(Math.random() * 10)) * 10;

    queue.push({
      id: `SEQ-2023-05-${(i + 2).toString().padStart(3, "0")}`,
      model,
      vinNumber: generateVIN(),
      suffix: generateSuffix(),
      startTime: queueStartTime.toISOString(),
      estimatedEndTime: new Date(
        queueStartTime.getTime() + duration * 60000,
      ).toISOString(),
      completionTime: "", // Empty until completed
      status: "queued" as const,
      batchSize,
      duration,
      completionPercentage: 0,
      completed: 0,
    });

    queueStartTime = new Date(queueStartTime.getTime() + duration * 60000);
  }

  return {
    current,
    queue,
    history,
  };
};

// Format date to readable format
const formatDate = (dateString: string | Date) => {
  const date =
    typeof dateString === "string" ? new Date(dateString) : dateString;
  return date.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Initial data
const initialSequences = generateSequenceData();

export default function ProductionSequencePage() {
  const [sequences, setSequences] = useState(initialSequences);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1); // 1x speed
  const [viewMode, setViewMode] = useState("table"); // "table" or "card"

  // Simulate sequence progression
  useEffect(() => {
    if (!isSimulationRunning) return;

    const interval = setInterval(() => {
      setSequences((prev) => {
        // Update current sequence progress
        const updatedCurrent = {
          ...prev.current,
          id: prev.current.id,
          model: prev.current.model ?? "N/A",
          completionPercentage: prev.current.completionPercentage ?? 0,
          completed: prev.current.completed ?? 0,
        };

        updatedCurrent.completionPercentage += 5 * simulationSpeed;
        updatedCurrent.completed += Math.floor(7.5 * simulationSpeed);

        if (updatedCurrent.completionPercentage >= 100) {
          const now = new Date();

          // Current sequence completed, move to history
          const completedSequence = {
            ...updatedCurrent,
            status: "completed" as const,
            endTime: now.toISOString(),
            completionPercentage: 100,
            completed: updatedCurrent.batchSize,
            completionTime: formatDate(now),
          };

          // Move first queue item to current
          const newCurrent =
            prev.queue.length > 0
              ? {
                  ...prev.queue[0],
                  status: "running" as const,
                  startTime: new Date().toISOString(),
                  estimatedEndTime: new Date(
                    Date.now() +
                      (prev.queue[0]?.estimatedDuration ?? 0) * 60000,
                  ).toISOString(),
                  completionPercentage: 0,
                  completed: 0,
                  completionTime: "",
                }
              : {
                  id: "No active sequence",
                  model: "N/A",
                  vinNumber: "N/A",
                  suffix: "N/A",
                  startTime: new Date().toISOString(),
                  estimatedEndTime: new Date().toISOString(),
                  completionTime: "N/A",
                  status: "idle" as const,
                  completionPercentage: 0,
                  batchSize: 0,
                  duration: 0,
                  completed: 0,
                };

          return {
            current: newCurrent,
            queue: prev.queue.slice(1),
            history: [completedSequence, ...prev.history],
          } as SequenceState;
        }

        return {
          ...prev,
          current: updatedCurrent,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isSimulationRunning, simulationSpeed]);

  // Toggle simulation
  const toggleSimulation = () => {
    setIsSimulationRunning(!isSimulationRunning);
  };

  // Skip to next sequence
  const skipToNextSequence = () => {
    if (sequences.queue.length === 0) return;

    setSequences((prev) => {
      const now = new Date();

      // Move current to history
      const completedSequence = {
        ...prev.current,
        status: "completed" as const,
        endTime: now.toISOString(),
        completionTime: formatDate(now),
      };

      // Move first queue item to current
      const newCurrent =
        prev.queue.length > 0
          ? {
              ...prev.queue[0],
              status: "running" as const,
              startTime: new Date().toISOString(),
              estimatedEndTime: new Date(
                Date.now() + (prev.queue[0]?.estimatedDuration ?? 0) * 60000,
              ).toISOString(),
              completionPercentage: 0,
              completed: 0,
              completionTime: "",
            }
          : {
              id: "No active sequence",
              model: "N/A",
              vinNumber: "N/A",
              suffix: "N/A",
              startTime: new Date().toISOString(),
              estimatedEndTime: new Date().toISOString(),
              completionTime: "N/A",
              status: "idle" as const,
              completionPercentage: 0,
              batchSize: 0,
              duration: 0,
              completed: 0,
            };

      return {
        current: newCurrent,
        queue: prev.queue.slice(1),
        history: [completedSequence, ...prev.history],
      } as SequenceState;
    });
  };

  // Change simulation speed
  const changeSimulationSpeed = () => {
    setSimulationSpeed((prev) => (prev === 1 ? 2 : prev === 2 ? 5 : 1));
  };

  // Prepare all sequences for display
  const queueSequences = sequences.queue.map((seq) => ({
    ...seq,
    type: "queue",
  }));

  const currentSequence = {
    ...sequences.current,
    type: "current",
  };

  const historySequences = sequences.history.map((seq) => ({
    ...seq,
    type: "history",
  }));

  return (
    <div className="min-h-screen bg-slate-100 p-4 dark:bg-slate-900">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Production Sequence Monitor
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Line Production Status and Sequence Information
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={isSimulationRunning ? "destructive" : "default"}
            onClick={toggleSimulation}
          >
            {isSimulationRunning ? (
              <Pause className="mr-1 h-4 w-4" />
            ) : (
              <Play className="mr-1 h-4 w-4" />
            )}
            {isSimulationRunning ? "Pause" : "Start"} Simulation
          </Button>
          <Button variant="outline" onClick={changeSimulationSpeed}>
            {simulationSpeed}x Speed
          </Button>
          <Button variant="outline" onClick={skipToNextSequence}>
            <SkipForward className="mr-1 h-4 w-4" />
            Skip
          </Button>
        </div>
      </header>

      <Tabs defaultValue="table" className="w-full" onValueChange={setViewMode}>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 bg-yellow-400"></div>
              <span className="text-sm">Current</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 bg-green-500"></div>
              <span className="text-sm">History</span>
            </div>
            <div className="flex items-center">
              <div className="mr-2 h-4 w-4 bg-slate-300"></div>
              <span className="text-sm">Queue</span>
            </div>
          </div>
          <TabsList>
            <TabsTrigger value="table" className="flex items-center gap-1">
              <Table className="h-4 w-4" />
              Table View
            </TabsTrigger>
            <TabsTrigger value="card" className="flex items-center gap-1">
              <LayoutGrid className="h-4 w-4" />
              Card View
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Table View */}
        <TabsContent value="table">
          <Card>
            <CardHeader className="rounded-t-lg bg-slate-50 dark:bg-slate-800">
              <CardTitle className="flex items-center text-xl">
                <ListOrdered className="mr-2 h-5 w-5 text-blue-500" />
                Production Sequence Table
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed">
                  <colgroup>
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>
                  <thead className="sticky top-0 z-10 bg-slate-100 dark:bg-slate-800">
                    <tr className="border-b border-slate-200 dark:border-slate-700">
                      <th className="px-4 py-3 text-left font-medium text-slate-500 dark:text-slate-400">
                        NO SEQ
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-slate-500 dark:text-slate-400">
                        MODEL
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-slate-500 dark:text-slate-400">
                        VIN NUMBER
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-slate-500 dark:text-slate-400">
                        SUFFIX
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-slate-500 dark:text-slate-400">
                        TIME COMPLETE
                      </th>
                      <th className="px-4 py-3 text-left font-medium text-slate-500 dark:text-slate-400">
                        STATUS
                      </th>
                    </tr>
                  </thead>
                </table>

                {/* Queue Section - Scrollable */}
                <div className="max-h-[300px] overflow-y-auto">
                  <table className="w-full table-fixed">
                    <colgroup>
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "15%" }} />
                      <col style={{ width: "30%" }} />
                      <col style={{ width: "15%" }} />
                      <col style={{ width: "10%" }} />
                      <col style={{ width: "10%" }} />
                    </colgroup>
                    <tbody>
                      {queueSequences.map((seq) => (
                        <tr
                          key={`queue-${seq.id}`}
                          className="border-b border-slate-200 bg-slate-300 text-slate-800 dark:border-slate-700 dark:bg-slate-500 dark:text-white"
                        >
                          <td className="px-4 py-3 font-medium">{seq.id}</td>
                          <td className="px-4 py-3">{seq.model}</td>
                          <td className="px-4 py-3 font-mono text-sm">
                            {seq.vinNumber}
                          </td>
                          <td className="px-4 py-3">{seq.suffix}</td>
                          <td className="px-4 py-3">{seq.completionTime}</td>
                          <td className="px-4 py-3">
                            <Badge variant="secondary" className="text-xs">
                              QUEUED
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Current Sequence - Always visible */}
                <table className="w-full table-fixed">
                  <colgroup>
                    <col style={{ width: "20%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "30%" }} />
                    <col style={{ width: "15%" }} />
                    <col style={{ width: "10%" }} />
                    <col style={{ width: "10%" }} />
                  </colgroup>
                  <tbody>
                    <tr className="border-b border-slate-200 bg-yellow-400 text-white dark:border-slate-700 dark:bg-yellow-700">
                      <td className="px-4 py-3 font-medium">
                        {currentSequence.id}
                      </td>
                      <td className="px-4 py-3">{currentSequence.model}</td>
                      <td className="px-4 py-3 font-mono text-sm">
                        {currentSequence.vinNumber}
                      </td>
                      <td className="px-4 py-3">{currentSequence.suffix}</td>
                      <td className="px-4 py-3">
                        {currentSequence.completionTime}
                      </td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="secondary"
                          className="bg-yellow-500 text-xs hover:bg-yellow-700"
                        >
                          RUNNING
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* History Section - Scrollable */}
                <div className="max-h-[300px] overflow-y-auto">
                  <table className="w-full table-fixed">
                    <colgroup>
                      <col style={{ width: "20%" }} />
                      <col style={{ width: "15%" }} />
                      <col style={{ width: "30%" }} />
                      <col style={{ width: "15%" }} />
                      <col style={{ width: "10%" }} />
                      <col style={{ width: "10%" }} />
                    </colgroup>
                    <tbody>
                      {historySequences.map((seq) => (
                        <tr
                          key={`history-${seq.id}`}
                          className="border-b border-slate-200 bg-green-500 text-white dark:border-slate-700 dark:bg-green-700"
                        >
                          <td className="px-4 py-3 font-medium">{seq.id}</td>
                          <td className="px-4 py-3">{seq.model}</td>
                          <td className="px-4 py-3 font-mono text-sm">
                            {seq.vinNumber}
                          </td>
                          <td className="px-4 py-3">{seq.suffix}</td>
                          <td className="px-4 py-3">{seq.completionTime}</td>
                          <td className="px-4 py-3">
                            <Badge
                              variant="secondary"
                              className="bg-green-600 text-xs hover:bg-green-700"
                            >
                              COMPLETED
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Card View */}
        <TabsContent value="card">
          <Card>
            <CardHeader className="rounded-t-lg bg-slate-50 dark:bg-slate-800">
              <CardTitle className="flex items-center text-xl">
                <ListOrdered className="mr-2 h-5 w-5 text-blue-500" />
                Production Sequence Cards
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              {/* Card View Header */}
              <div className="mb-4 grid grid-cols-6 gap-4 border-b px-4 pb-2 font-medium text-slate-500 dark:text-slate-400">
                <div>NO SEQ</div>
                <div>MODEL</div>
                <div>VIN NUMBER</div>
                <div>SUFFIX</div>
                <div>TIME COMPLETE</div>
                <div>STATUS</div>
              </div>

              {/* Queue Section */}
              <div className="mb-4 max-h-[300px] overflow-y-auto">
                {queueSequences.map((seq, index) => (
                  <div
                    key={`card-queue-${seq.id}`}
                    className="mb-2 grid grid-cols-6 items-center gap-4 rounded-lg bg-slate-300 p-4 text-slate-800 dark:bg-slate-500 dark:text-white"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-400 dark:bg-slate-600">
                        <span className="text-sm font-medium text-white">
                          {index + 1}
                        </span>
                      </div>
                      <span className="font-medium">{seq.id}</span>
                    </div>
                    <div>{seq.model}</div>
                    <div className="font-mono text-sm">{seq.vinNumber}</div>
                    <div>{seq.suffix}</div>
                    <div>{seq.completionTime}</div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        QUEUED
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Current Sequence with integrated progress bar */}
              <div className="mb-4 rounded-lg bg-yellow-400 p-4 text-white dark:bg-yellow-700">
                <div className="mb-3 grid grid-cols-6 items-center gap-4">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 dark:bg-yellow-800">
                      <span className="text-sm font-medium text-white">C</span>
                    </div>
                    <span className="font-medium">{currentSequence.id}</span>
                  </div>
                  <div>{currentSequence.model}</div>
                  <div className="font-mono text-sm">
                    {currentSequence.vinNumber}
                  </div>
                  <div>{currentSequence.suffix}</div>
                  <div>{currentSequence.completionTime}</div>
                  <div>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-500 text-xs hover:bg-yellow-700"
                    >
                      RUNNING
                    </Badge>
                  </div>
                </div>

                {/* Progress bar integrated in the same card */}
                <div className="mt-2 border-t border-yellow-500 pt-3 dark:border-yellow-600">
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Progress</span>
                    <span>
                      {Math.round(currentSequence.completionPercentage ?? 0)}%
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-yellow-500/30 dark:bg-yellow-800/30">
                    <div
                      className="flex h-4 items-center justify-center rounded-full bg-white text-xs font-medium text-yellow-600"
                      style={{
                        width: `${currentSequence.completionPercentage ?? 0}%`,
                      }}
                    >
                      {Math.floor(currentSequence.completionPercentage ?? 0) >=
                        20 && (
                        <>
                          {Math.floor(
                            currentSequence.completionPercentage ?? 0,
                          )}
                          %
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* History Section */}
              <div className="max-h-[300px] overflow-y-auto">
                {historySequences.map((seq, index) => (
                  <div
                    key={`card-history-${seq.id}`}
                    className="mb-2 grid grid-cols-6 items-center gap-4 rounded-lg bg-green-500 p-4 text-white dark:bg-green-700"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-600 dark:bg-green-800">
                        <span className="text-sm font-medium text-white">
                          {index + 1}
                        </span>
                      </div>
                      <span className="font-medium">{seq.id}</span>
                    </div>
                    <div>{seq.model}</div>
                    <div className="font-mono text-sm">{seq.vinNumber}</div>
                    <div>{seq.suffix}</div>
                    <div>{seq.completionTime}</div>
                    <div>
                      <Badge
                        variant="secondary"
                        className="bg-green-600 text-xs hover:bg-green-700"
                      >
                        COMPLETED
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {sequences.current.status === "running" && viewMode === "table" && (
        <Card className="mt-6 border-l-4 border-l-yellow-500">
          <CardHeader className="rounded-t-lg bg-slate-50 py-3 dark:bg-slate-800">
            <CardTitle className="text-lg">Current Sequence Progress</CardTitle>
            <div className="w-full">
              <div className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="flex h-4 items-center justify-center rounded-full bg-yellow-500 text-xs font-medium text-white"
                  style={{
                    width: `${sequences.current.completionPercentage ?? 0}%`,
                  }}
                >
                  {Math.floor(sequences.current.completionPercentage ?? 0) >=
                    20 && (
                    <>
                      {Math.floor(sequences.current.completionPercentage ?? 0)}%
                    </>
                  )}
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      )}
    </div>
  );
}
