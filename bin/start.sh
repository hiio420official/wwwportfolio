cd /home/hiio420/C/project/portfolio
git checkout main
git pull origin main
npm i
npm run build
kill -9 $(lsof -i:3000 -t)
nohup npm run start &