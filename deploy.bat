@echo off
:: 一键部署脚本
:: 在有网络的环境中运行此脚本即可推送代码到 GitHub 触发自动部署

cd /d "%~dp0"

echo ===========================================
echo    博客部署脚本
echo ===========================================
echo.

echo [INFO] 当前分支:
git branch --show-current

echo.
echo [INFO] 远程仓库:
git remote -v

echo.
echo [INFO] 推送代码到 GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo [ERROR] 推送失败！可能原因：
    echo   - 网络连接问题
    echo   - 需要登录 GitHub 账号
    echo   - SSH 密钥未配置
    echo.
    echo 请检查网络后重试，或手动执行：
    echo   git push origin main
    pause
    exit /b 1
)

echo.
echo ===========================================
echo [SUCCESS] 推送成功！
echo ===========================================
echo.
echo GitHub Actions 将自动构建并部署到 Pages。
echo 部署状态查看：
echo   https://github.com/qiqi1200/Guancii-One/actions
echo.
pause
