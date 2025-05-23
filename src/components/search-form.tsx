export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative text-xl text-gray-500">
        Name Of Your Application
      </div>
    </form>
  );
}
