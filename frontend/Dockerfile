# Étape de build : utilisation de Node.js pour compiler l'application React
FROM node:18-alpine as build
WORKDIR /app
# Copie des fichiers de dépendances (package.json et package-lock.json)
COPY package*.json ./
# npm ci installe les versions exactes du lockfile pour garantir un build reproductible
RUN npm ci
COPY . .
# Génération des fichiers statiques optimisés pour la production
RUN npm run build

# Étape finale : utilisation de NGINX pour servir les fichiers statiques
FROM nginx:alpine
# Copie du build généré précédemment dans le dossier de NGINX
COPY --from=build /app/build /usr/share/nginx/html
# Configuration personnalisée de NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
