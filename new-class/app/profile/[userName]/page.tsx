
type ProfilePageProps = {
    //userName becoz the name of the folder is [userName]
    params: Promise<{ userName: string }>;
}

//passing the type ProfilePageProps to the function ProfilePage
export default async function ProfilePage({params}: ProfilePageProps){

    const users =[
        {   
            id: 1,
            name: "Srivi",
            email: "srivi@example.com",
            bio: "Srivi is a software developer with a passion for creating innovative solutions."
        },

        {
            id: 2,
            name: "Seema",
            email: "seema@example.com",
            bio: "Seema is a marketing specialist with a keen interest in digital marketing strategies."
        },

        {
            id: 3,
            name: "Rajesh",
            email: "rajesh@example.com",
            bio: "Rajesh is a sales manager with extensive experience in building and maintaining client relationships."
        },

        {
            id: 4,
            name: "Pranjal",
            email: "pranjal@example.com",
            bio: "Pranjal is a full-stack developer with expertise in both front-end and back-end technologies."
        }


    ]

    const pageParams = await params

    const userKaName = pageParams.userName

    const user = users.find(user => user.name.toLocaleLowerCase() === userKaName.toLocaleLowerCase())

    return(
        <div>
            <h1>{user?.name || "Unknown"} Profile Page</h1>
            <p>Email: {user?.email || "Not available"}</p>
            <p>Bio: {user?.bio || "Not available"}</p>
        </div>
    )
}