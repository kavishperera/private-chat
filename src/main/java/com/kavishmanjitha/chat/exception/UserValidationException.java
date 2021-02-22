package com.kavishmanjitha.chat.exception;

public class UserValidationException extends RuntimeException {
    public UserValidationException() {
        super();
    }

    public UserValidationException(String message) {
        super(message);
    }
}
