$result = Test-NetConnection -ComputerName db.mbbsewasgqlonxryjdni.supabase.co -Port 5432
Write-Host "TCP Port 5432 Test Result:"
Write-Host "TcpTestSucceeded: $($result.TcpTestSucceeded)"
Write-Host "PingSucceeded: $($result.PingSucceeded)"
