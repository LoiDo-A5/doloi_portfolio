pm2 stop "next-app"
git pull
rm -rf .next
npm run build
pm2 start npm --name "next-app" -- run start
pm2 save
