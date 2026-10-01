async function submitIntent(){

    const intent =
        document.getElementById("intentInput").value;

    const response = await fetch("/api/intent",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            intent
        })
    });

    const data = await response.json();

    document.getElementById("result").innerHTML =
        JSON.stringify(data,null,2);
}
