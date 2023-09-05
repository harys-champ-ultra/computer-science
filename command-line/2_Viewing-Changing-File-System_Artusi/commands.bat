@REM Creating directories and files

@REM Create a new directory
mkdir new_directory
@REM Create a new file
echo.>new_file.txt




@REM Renaming and moving

@REM Rename a file
rename old_file.txt new_file.txt
@REM Move a file
move file.txt new_location\




@REM Copying files and directories

@REM Copy a file
copy file.txt new_location\
@REM Copy a directory and its contents
xcopy /s /i directory_name new_location\




@REM Deleting files and directories

@REM Delete a file
del file.txt
@REM Delete a directory and its contents
rmdir /s /q directory_name
