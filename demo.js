# Javascript
function Validation() {

                    var txtGroupCode = document.getElementById("<%=txtGroupCode.ClientID %>");
                    var txtAgentGroupDesc = document.getElementById("<%=txtAgentGroupDesc.ClientID %>");
                    var txtMode = document.getElementById("<%=Mode.ClientID %>");

                    if (trim(txtMode.value) == "Add") {
                        if (trim(txtGroupCode.value) == "") {
                            alert("Please Enter a Agent Group Code.");
                            txtGroupCode.focus();
                            return false;
                        }
                    }

                    if (trim(txtAgentGroupDesc.value) == "") {
                        alert("Please Enter a Agent Group Description.");
                        txtAgentGroupDesc.focus();
                        return false;
                    }

                    if (confirm("Do you want to Add/Update Agent Group ? ") == true) {
                        return true;
                    }
                    else {
                        return false;
                    }

                    setTimeout(DisableAll, 100);
                    return true;
                }
