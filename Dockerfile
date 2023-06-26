# Usa a imagem base do Nginx
FROM nginx

# Copia o arquivo de configuração personalizado para dentro do contêiner
COPY nginx.conf /etc/nginx/nginx.conf

# Copia os arquivos estáticos do site para a pasta padrão do Nginx
COPY /PrimeiroSite /usr/share/nginx/html

# Expoe a porta 80 para tráfego externo
EXPOSE 80

# Define o comando padrão a ser executado quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;"]