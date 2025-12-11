# Fix PowerShell Extension Issue in VS Code

## Problem
The PowerShell Extension Terminal keeps stopping with error: "The PowerShell Extension Terminal has stopped, would you like to restart it?"

## Solutions (Try in Order)

### 1. **Check PowerShell Profile for Errors**
The most common cause is an error in your PowerShell profile script.

**Steps:**
1. Open PowerShell and run:
   ```powershell
   Test-Path $PROFILE
   ```
2. If it returns `True`, check for errors:
   ```powershell
   . $PROFILE
   ```
3. If errors appear, temporarily disable profile loading:
   - In VS Code: `Ctrl+,` (Settings)
   - Search: `powershell.enableProfileLoading`
   - Set to: `false` or `"off"`
   - Restart VS Code

### 2. **Check Execution Policy**
Run in PowerShell:
```powershell
Get-ExecutionPolicy -List
```

If it's too restrictive, set it (requires admin):
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 3. **Reinstall PowerShell Extension**
1. Open Extensions (`Ctrl+Shift+X`)
2. Search "PowerShell"
3. Click the gear icon → Uninstall
4. Restart VS Code
5. Reinstall the extension

### 4. **Clear Extension Cache**
1. Close VS Code
2. Delete the extension folder:
   ```
   %USERPROFILE%\.vscode\extensions\ms-vscode.powershell-*
   ```
3. Restart VS Code and reinstall the extension

### 5. **Check for Security Software Blocking**
- Check Windows Event Viewer for AppLocker or security policy blocks
- Temporarily disable antivirus/security software to test
- Check if Windows Defender is blocking PowerShell scripts

### 6. **Update PowerShell Extension Settings**
In VS Code Settings (`Ctrl+,`), configure:
- `powershell.enableProfileLoading`: `false` (temporarily)
- `powershell.integratedConsole.useLegacyReadLine`: `false`
- `powershell.powerShellDefaultVersion`: Leave empty or set to your PowerShell path

### 7. **Use Specific PowerShell Path**
If you have multiple PowerShell installations:
1. Settings → Search: `powershell.powerShellDefaultVersion`
2. Set to: `C:\Program Files\PowerShell\7\pwsh.exe` (or your path)

### 8. **Check Digital Certificate Issues**
If scripts are blocked due to certificates:
1. Navigate to: `%USERPROFILE%\.vscode\extensions\ms-vscode.powershell-<version>\modules\PowerShellEditorServices`
2. Right-click `Start-EditorServices.ps1` → Properties → Digital Signatures
3. Import certificate to Trusted Publishers if needed

### 9. **Check Windows Event Logs**
1. Open Event Viewer
2. Check `Windows Logs → Application` for PowerShell errors
3. Look for entries around the time the extension crashes

### 10. **Reset VS Code Settings**
If nothing works, reset PowerShell extension settings:
1. Settings → Search: `powershell`
2. Click "Reset Setting" on all PowerShell-related settings
3. Restart VS Code

## Quick Test
After applying fixes, test by:
1. Opening a `.ps1` file
2. Checking if IntelliSense works
3. Running a simple command in the integrated terminal

## Still Not Working?
- Check the PowerShell extension GitHub issues: https://github.com/PowerShell/vscode-powershell/issues
- Try using PowerShell 5.1 instead of PowerShell 7
- Consider using the Preview version of the extension

