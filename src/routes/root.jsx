import { useLoaderData, Link, Outlet } from "react-router-dom"

export async function loader() {
    const url = "https://api.github.com/repos/facebook/create-react-app/issues"
    const issueList = await fetch(url).then(response => response.json());

    return { issueList };
}

export default function Root() {
    const { issueList } = useLoaderData();
    console.log("INSIDE COMPONENT: ", issueList)

    return (
        <>
            <h1>GitHub Issue List</h1>
            <ul>
                {issueList.map(issue => {
                    return (<li key={issue.id}>
                        <Link to={`/issue/${issue.number}`}>
                            {issue.title}
                        </Link>
                    </li>)
                })}
            </ul>
            <Outlet />
        </>
    )
}
