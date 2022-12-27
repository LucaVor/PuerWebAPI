function upload_adat_file()
{
    const form = document.getElementById("adat-form");

    const files = document.getElementById("adat_input");
    const formData = new FormData();

    for(let i = 0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
    }

    fetch("http://localhost:2999/upload_files", {
        method: 'POST',
        body: formData,
        headers: {
         
        }
    })
        .then((res) => console.log(res))
        .catch((err) => ("Error occured", err));

}