package com.kavishmanjitha.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin
public class ChatController {

    @Autowired ChatService chatService;

    @GetMapping("/messages/{userId}")
    public List<Message> getMessages(@PathVariable UUID userId) {
        return chatService.getMessages(userId);
    }

    @PostMapping("/message/edit") //TODO: here incorrect checking for null. fix it
    public ResponseEntity<?> editOrAddMessage(@RequestBody Message message) {
        Message responseMessage = chatService.editOrAddMessage(message.getUserId(), message);

        if(responseMessage == null) {
            //return new ResponseEntity<>(Map.of("error", "This user is not logged in"), HttpStatus.FORBIDDEN);
        }

        return new ResponseEntity<>(responseMessage, HttpStatus.OK);
    }

    @PostMapping("/user/edit") //TODO: here incorrect checking for null. fix it
    public User editOrAddUser( @RequestBody User newUser) {
        return chatService.editOrAddUser(newUser);
    }

    @PostMapping("/login")
    public User login(@RequestBody UserLoginDto user) {
        return chatService.login(user.getUserName(), user.getPassword());
    }

    @GetMapping("/userList/{adminId}")
    public List<User> userList(@PathVariable UUID adminId) {
        return chatService.getUserList(adminId);
    }

    @DeleteMapping("/message/delete/{messageId}") //TODO: next three methods not checking for loggedin user and admin, have to be fixed
    public void deleteMessage(@PathVariable UUID messageId) {
        chatService.deleteMessage(messageId);
    }

    @DeleteMapping("/user/delete/{userId}")
    public void deleteUser(@PathVariable UUID userId) {
        chatService.deleteUser(userId);
    }

    @PutMapping("/message/like/{messageId}")
    public Message setLike(@PathVariable UUID messageId) {
        return chatService.setLike(messageId);
    }

}
