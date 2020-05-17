const empCode = document.getElementById('empCode');


async function getEmpCode() {
    const response = await fetch('/empCodes', {
        method: 'GET'
      });
    const json = await response.json();
    for (index = 0; index < json.length; index++) {
        const option = document.createElement('OPTION');
        option.text = json[index].employeeCode;
        empCode.add(option);
    }
}

getEmpCode();