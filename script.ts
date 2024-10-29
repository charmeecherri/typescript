

async function handleSubmit(event: Event) {
    event.preventDefault();

    const name: string = (document.getElementsByName("name")[0] as HTMLInputElement).value;
    const email: string = (document.getElementsByName("mail")[0] as HTMLInputElement).value;
    const mobile: number = parseInt((document.getElementsByName("mobile")[0] as HTMLInputElement).value);
    const subject: string = (document.getElementsByName("subject")[0] as HTMLInputElement).value;
    const message: string = (document.getElementsByName("message")[0] as HTMLInputElement).value;

    if (mobile.toString().length != 10) {
        alert("Contact should be 10 digits length..")
        return false;
    }

    const data = { name, email, mobile, subject, message };
    try {
        const res = await fetch("https://6720b9b498bbb4d93ca5b4a7.mockapi.io/contact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            alert(`Error occured submitting the form ${res.status}`);
            return false;
        }

        await res.json();
        alert('Form submitted successfully');
    }
    catch (err) {
        alert(`Error occured submitting the form ${err}`);
    }

    window.location.reload();
    return true;

}

(document.getElementById('form') as HTMLFormElement).addEventListener('submit', handleSubmit);