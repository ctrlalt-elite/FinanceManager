var necess = document.getElementById("GFG_DOWN1");
        var want = document.getElementById("GFG_DOWN2");
        var save = document.getElementById("GFG_DOWN3");
        var inputF = document.getElementById("id1");

        function ness() {
            inputF.setAttribute('value', 'defaultValue');
            necess.value = 0.5 * inputF.value;
        }
        function wants() {
            inputF.setAttribute('value', 'defaultValue');
            want.value = 0.3 * inputF.value;
        }
        function savings() {
            inputF.setAttribute('value', 'defaultValue');
            save.value = 0.2 * inputF.value;
        }