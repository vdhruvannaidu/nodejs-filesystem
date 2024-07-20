# File Change Watcher with Command Execution

## Overview

This repository contains a Node.js script that monitors a specific file for changes. When a change is detected, the script reads the file for simple English commands and executes them to create new files with specified content accordingly. This can be useful for automating tasks based on predefined commands written in a file.

## Features

- **File Monitoring:** Continuously watches a specified file for changes.
- **Command Parsing:** Reads simple English commands from the monitored file.
- **File Creation:** Executes commands to create new files with specified content based on the instructions provided.

## Usage

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/file-change-watcher.git
    cd file-change-watcher
    ```

2. **Run the script:**

    ```bash
    node index.js
    ```

3. **Provide commands in the monitored file:**

    Edit the `commands.txt` file with simple English commands. For example:
    
    ```
    create file example.txt with content "Hello, World!"
    create file notes.md with content "# Notes\nThis is a note."
    ```

    The script will read these commands and create the specified files with the given content when `commands.txt` is saved.

## Example Commands

- `create file <filename> with content "<content>"`: Creates a new file with the specified name and content.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
