# Verification Popup
An OTP verification popup created using React.

## Set Up
To run this project locally
```
# clone this repository
git clone https://github.com/Tanishka-2000/verification-popup.git

# go into the folder
cd verification-popup

# install dependencies
npm install

# run the app
npm run dev

```

## Features
+ The user can enter only a 6 digit (numeric) OTP (No alphabets, spaces, or other characters should be allowed).
+ Once a digit is entered, the focus moves to the next input.
+ Backspace delete the input and focus on the previous input.
+ The user can navigate the input boxes with arrow keys
+ If the user pastes the OTP from the clipboard, it auto-fill the input boxes.
 > To paste the OTP, use context menu (option menu on right click) to paste. CTRL + V won't work.