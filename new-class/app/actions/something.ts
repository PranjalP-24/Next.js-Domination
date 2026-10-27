//for make server action we have to add this line at the top of the file i.e., 'use server'
'use server'

//if you are creating a server action function then try that at last "action" word is written 
// (it is easier for the internal of next.js to identify the server action function)

export async function someAction(){
    console.log("some action called...")
}
