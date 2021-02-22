package com.kavishmanjitha.chat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private UUID userId;
    private String avatar;
    private String userName;
    private String password;
    private Boolean isLoggedIn;
    private Boolean isAdmin;
}
