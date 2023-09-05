# Redirecting output to a file

# Save the list of files and directories to file_list.txt
ls > file_list.txt




# Appending output to a file

# Append the list of files and directories to file_list.txt
ls >> file_list.txt




# Redirecting input from a file

# Display the contents of input.txt
cat < input.txt




# Piping output to another command

# List files and directories, then filter by a pattern using grep
ls -l | grep "pattern"
