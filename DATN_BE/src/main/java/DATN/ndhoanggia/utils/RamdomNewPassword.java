package DATN.ndhoanggia.utils;

import java.util.Random;

public class RamdomNewPassword {
    public static String RamdomPass(){
        String str = "qwertyuiopasdfghjklzxcvbnm123456789";
        Random random = new Random();
        String pass = "";
        for (int i=0;i<6;i++){
            int index = random.nextInt(str.length());
            char charIndex = str.charAt(index);
            pass += charIndex;
        }
        return pass;
    }
}
