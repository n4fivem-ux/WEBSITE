@echo off
echo ================================
echo   BNS Prestige - Installation
echo ================================
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
  echo Node.js n'est pas installe !
  echo Telechargez-le sur : https://nodejs.org
  pause
  exit /b 1
)

echo Installation des dependances...
call npm install

echo.
echo Lancement du site...
start http://localhost:3000
call npm run dev

pause
