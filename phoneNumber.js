// 1. Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid


const numbersToCheck = ["(206)333-4444","206-333-4444","206 333 4444"];
const numbertoCheck = ["(206)333-4444"];

const testPhoneNumber = (item, index) => {
        // console.log(item);
        const re= /^\(?(\d{3})\)?(-| )?(\d{3})(-| )?(\d{4})$/;       
        var test =  re.test(item);
        console.log(test);
        //console.log(item.match(re)[0]);
        //console.log(item.match(re)[1]);
        //console.log(item.match(re)[3]);
        //console.log(item.match(re)[5]);
    };

// numbersToCheck.forEach(testPhoneNumber);
// testPhoneNumber(numbertoCheck)

// check testPhoneNumber

console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit



// 2. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.


// Returns an object in the format {areaCode, phoneNumber}

const parsePhoneNumber = (item,index) => {
            const re= /^\(?(\d{3})\)?(-| )?(\d{3})(-| )?(\d{4})$/;
            var parsedNumber = {
                areaCode : item.match(re)[1],
                phoneNumber : item.match(re)[3] + item.match(re)[5]
            };
            return parsedNumber;
};
 
   
parsePhoneNumber('206-333-4444')
// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.



// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}