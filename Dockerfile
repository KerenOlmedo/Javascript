# Usa a imagem base do Nginx
FROM nginx

# Copia os arquivos estáticos do site para a pasta padrão do Nginx
COPY PrimeiroSite /usr/share/nginx/html

# Expoe a porta 80 para tráfego externo(do container)
EXPOSE 80


#DICAS PARA SUBIR O SITE
#- Criar a imagem através deste Dockerfile estando no mesmo diretório que ele: "docker build -t meu-site-nginx(nome da imagem) ."
#- Subir um container através da imagem criada anteriormente: "docker run -d -p 80:80 meu-site-nginx(nome da imagem)" sendo a 
#primeira porta 80 da EC2(liberado o acesso na mesma) e a segunda após os dois pontos do container(especificada no Dockerfile)