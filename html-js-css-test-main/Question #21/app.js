function checkIfAllVowels(str)
{
 
    // Hash Array of size 5
    // such that the index 0, 1, 2, 3 and 4
    // represent the vowels a, e, i, o and u
    var hash = Array(5).fill(0);
 
    // Loop the string to mark the vowels
    // which are present
    for (var i = 0; i < str.length; i++) {
 
        if (str[i] == 'A' || str[i] == 'a')
            hash[0] = 1;
 
        else if (str[i] == 'E' || str[i] == 'e')
            hash[1] = 1;
 
        else if (str[i] == 'I' || str[i] == 'i')
            hash[2] = 1;
 
        else if (str[i] == 'O' || str[i] == 'o')
            hash[3] = 1;
 
        else if (str[i] == 'U' || str[i] == 'u')
            hash[4] = 1;
    }
 
    // Loop to check if there is any vowel
    // which is not present in the string
    for (var i = 0; i < 5; i++) {
        if (hash[i] == 0) {
            return 1;
        }
    }
    return 0;
}
 
// Function to to check that
// a string contains all vowels
function checkIfAllVowelsArePresent(str)
{
 
    if (checkIfAllVowels(str))
        document.write( "Not Accepted<br>");
    else
        document.write( "Accepted<br>");
}
 
// Driver Code
var str = "aeioubc";
checkIfAllVowelsArePresent(str);