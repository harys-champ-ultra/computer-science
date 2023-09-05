@REM Redirecting output to a file

@REM Save the list of files and directories to file_list.txt
dir > file_list.txt




@REM Appending output to a file

@REM Append the list of files and directories to file_list.txt
dir >> file_list.txt




@REM Redirecting input from a file

@REM Display the contents of input.txt
type input.txt




@REM Piping output to another command

@REM List files and directories, then filter by a pattern using findstr
dir /s /b | findstr "pattern"
