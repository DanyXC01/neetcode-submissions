class Logger:
    def __init__(self):
        self.logger_map = {}

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        if message in self.logger_map:
            message_timestamp = self.logger_map[message]
            if timestamp >= message_timestamp:
                self.logger_map[message] = timestamp + 10
                return True
            else:
                return False
        else:
            current_timestamp = timestamp + 10
            self.logger_map[message] = current_timestamp
            return True