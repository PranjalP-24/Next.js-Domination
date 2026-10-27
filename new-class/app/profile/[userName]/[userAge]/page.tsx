
type ProfilePageAgeProps = {
    params: Promise<{userName: string, userAge: string}>;
}

export default async function ProfilePage({params}: ProfilePageAgeProps){

    const pageParams = await params

    const userKaName = pageParams.userName
    const userKiAge = pageParams.userAge

    const users =[
        {
            id: 1,
            name: "Srivi",
            email: "srivi.pandey@example.com",
            age: 30,
            bio: "Srivi is a software developer with a passion for creating innovative solutions."
        },

        {
            id: 1,
            name: "Srivi",
            email: "srivi.sharma@example.com",
            age: 25,
            bio: "Srivi is a software developer with a passion for creating innovative solutions."
        },

        {
            id: 1,
            name: "Srivi",
            email: "srivi.chaturvedi@example.com",
            age: 20,
            bio: "Srivi is a software developer with a passion for creating innovative solutions."
        }
    ]

    const user = users.find(user => user.name.toLocaleLowerCase() === userKaName.toLocaleLowerCase() && user.age.toString() === userKiAge)

    return(
        <div>
            <h1>{user?.name || "Unknown"} Profile Page</h1>
            <p>Email: {user?.email || "Not found"}</p>
            <p>Age: {user?.age || "Not found"}</p>
            <p>Bio: {user?.bio || "Not found"}</p>
        </div>
    )
}