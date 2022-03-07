import {createContext} from 'react';
import {avatarImages, avatarGifs} from "../shared/avatarImages";

export const ImagesContext = createContext({});

export function getImage(imageName){
    const images = {
        'home_background': 0,
        'background': 1,
        'back_button': 2,
        'white_logo': 3,
        'send': 4,
        'expand': 5,
        'question': 6,
        'join_room_icon': 7,
        'Characters_For_Screens': 8,
        'avatarBox': 9,
        'create_room': 10,
        'join_room': 11,
        'find_room': 12,
        'clipboard': 13,
        'unmute': 14,
        'mute': 15,
        'chat': 16,
        'avatarSelector': 17,
        'play': 18,
        'copyCode': 19,
        'exit': 20,
        'Brown_Glasses_Icon': 21,
        'Grey_Hat_Icon': 22,
        'Light_Skin_Tone_Icon': 23,
        'Tan_Skin_Tone_Icon': 24,
        'Golden_Skin_Tone_Icon': 25,
        'White_Shirt_Icon': 26,
        'Blue_Shirt_Icon': 27,
        'Purple_Shirt_Icon': 28,
        'Boy_Button': 29,
        'Girl_Button': 30,
        'Light_Skin_Tone_Icon': 31,
        'Tan_Skin_Tone_Icon': 32,
        'Golden_Skin_Tone_Icon': 33,
        'White_Shirt_Icon': 34,
        'Blue_Shirt_Icon': 35,
        'Purple_Shirt_Icon': 36,
        'Pink_Sweater_Icon': 37,
        'Blue_Sweater_Icon': 38,
        'Grey_Sweater_Icon': 39,
        'Brown_Glasses_Icon': 40,
        'No_Glasses_Icon': 41,
        'Grey_Hat_Icon': 42,
        'No_Hat_Icon': 43,
        '4_in_a_row_thumbnail': 44,
        'codenames_thumbnail': 45,
        'tic_tac_toe_thumbnail': 46,
        'checkers_thumbnail': 47,
        'ted_thumbnail': 48,
        'harlow_thumbnail': 49,
        'veritasium_thumbnail': 50,
        'angelou_thumbnail': 51,
        'lofi_thumbnail': 52,
        'Blue_Sweater_Icon': 53,
        'Grey_Sweater_Icon': 54,
        'Pink_Sweater_Icon': 55,
        'black_unmuted': 56,
        'black_muted': 57,
        'chat_bubble': 58,
        'subtitles': 59,
    };
    let cur = 60;
    for (let i = 0; i < 15; i++){
        images["htp" + (i + 1)] = cur;
        cur++;
    }
    for(let key in avatarImages){
        images[key] = cur;
        cur++;
    }
    for(let key in avatarGifs){
        images[key + 'gif'] = cur;
        cur++;
    }

    return images[imageName];
}