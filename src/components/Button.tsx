

interface ButtonProps{
    onCLick: ()=> void,
}


export function Button(onClick: ButtonProps){
    return (
        <Button onCLick={() => onClick}></Button>
    );
}