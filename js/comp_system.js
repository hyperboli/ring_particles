//Временный файл для локальных системных функций на компе

function WriteToFile() {
 
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s   = fso.CreateTextFile("filename.txt", True);
  
    s.writeline("-----------------------------");
    s.Close();
 }

 WriteToFile()