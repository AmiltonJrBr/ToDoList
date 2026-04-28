# ============================
# ESTÁGIO 1 - BUILD (Node)
# ============================
FROM node:20-alpine AS builder

# Pasta de trabalho
WORKDIR /app

# Copia apenas arquivos de dependência (cache inteligente)
COPY package.json package-lock.json ./

# Instala dependências
RUN npm install

# Copia o resto do projeto
COPY . .

# Gera a build do Vite (dist/)
RUN npm run build


# ============================
# ESTÁGIO 2 - PRODUÇÃO (NGINX)
# ============================
FROM nginx:alpine

# Copia os arquivos prontos do build
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Mantém o nginx rodando
CMD ["nginx", "-g", "daemon off;"]