# Gunakan image Node.js yang ringan
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# 🛠️ Copy folder prisma dulu sebelum install
COPY prisma ./prisma

# Install dependencies (termasuk prisma generate)
RUN npm install

# Copy semua file proyek (baru setelah dependencies)
COPY . .

# Build Next.js (optional tergantung use-case)
RUN npm run build

# Jalankan app
CMD ["npm", "start"]
