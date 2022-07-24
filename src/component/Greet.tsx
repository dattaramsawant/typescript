type GreetProps = {
    // name: string
    // messageCount: number
    // loggedIn: boolean
    // employee: string[]
    status: 'success' | 'error' | 'loading'
}

function Greet(props:GreetProps) {
    let message

    switch (props.status) {
        case 'success':
            message = 'Data fetch successfully.'
            break;

        case 'error':
            message = 'Error fetching data'
            break;
    
        case 'loading':
            message = 'loading...'
            break;
        default:
            break;
    }
    return (
        <div>
            {/* {props?.loggedIn ? 
                <h2>Hi {props?.name}, you have {props?.messageCount} unread messages.</h2>:
                <h2>Please Log in</h2>
            }
            {props.employee.map(name=><p>{name}</p>)} */}
            <h2>Status - {message}</h2>
        </div>
    )
}

export default Greet