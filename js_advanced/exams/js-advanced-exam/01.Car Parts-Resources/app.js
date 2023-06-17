window.addEventListener('load', solve);

function solve() {
        const modelInput = document.getElementById('car-model');
        const yearInput = document.getElementById('car-year');
        const partNameInput = document.getElementById('part-name');
        const partNumberInput = document.getElementById('part-number');
        const conditionInput = document.getElementById('condition');

        const completeImg = document.getElementById('complete-img');
        const completeText = document.getElementById('complete-text');

        const infoList = document.querySelector('.info-list');
        const confirmList = document.querySelector('.confirm-list');

        const nextBtn = document.getElementById('next-btn');
        nextBtn.addEventListener('click', next);

        completeImg.style.visibility = 'hidden';
        completeText.textContent = '';

        function next(e) {
                e.preventDefault();
                if (modelInput.value == '' || yearInput.value == '' || partNameInput.value == '' || partNumberInput.value == ''
                        || conditionInput.value == '' || (yearInput.value <= 1980 || yearInput.value >= 2023)) {
                        return;
                }
                nextBtn.disabled = true;

                const li = document.createElement('li');
                li.setAttribute('class', 'part-content');
                infoList.appendChild(li);

                const article = document.createElement('article');
                li.appendChild(article);

                const pModel = document.createElement('p');
                pModel.textContent = `Car Model: ${modelInput.value}`;
                article.appendChild(pModel);

                const pYear = document.createElement('p');
                pYear.textContent = `Car Year: ${yearInput.value}`;
                article.appendChild(pYear);

                const pPartName = document.createElement('p');
                pPartName.textContent = `Part Name: ${partNameInput.value}`;
                article.appendChild(pPartName);

                const pPartNumber = document.createElement('p');
                pPartNumber.textContent = `Part Number: ${partNumberInput.value}`;
                article.appendChild(pPartNumber);

                const pCondition = document.createElement('p');
                pCondition.textContent = `Condition: ${conditionInput.value}`;
                article.appendChild(pCondition);

                const editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.setAttribute('class', 'edit-btn');
                li.appendChild(editBtn);

                const continueBtn = document.createElement('button');
                continueBtn.textContent = 'Continue';
                continueBtn.setAttribute('class', 'continue-btn');
                li.appendChild(continueBtn);

                editBtn.addEventListener('click', edit);
                continueBtn.addEventListener('click', continueFunc);

                const modelEdit = modelInput.value;
                const yearEdit = yearInput.value;
                const partNameEdit = partNameInput.value;
                const partNumberEdit = partNumberInput.value;
                const conditionEdit = conditionInput.value;

                modelInput.value = '';
                yearInput.value = '';
                partNameInput.value = '';
                partNumberInput.value = '';
                conditionInput.value = '';

                function continueFunc() {
                        li.remove();

                        const newli = document.createElement('li');
                        newli.setAttribute('class', 'part-content');
                        confirmList.appendChild(newli);

                        const newarticle = document.createElement('article');
                        newli.appendChild(newarticle);

                        const newpModel = document.createElement('p');
                        newpModel.textContent = `Car Model: ${modelEdit}`;
                        newarticle.appendChild(newpModel);

                        const newpYear = document.createElement('p');
                        newpYear.textContent = `Car Year: ${yearEdit}`;
                        newarticle.appendChild(newpYear);

                        const newpPartName = document.createElement('p');
                        newpPartName.textContent = `Part Name: ${partNameEdit}`;
                        newarticle.appendChild(newpPartName);

                        const newpPartNumber = document.createElement('p');
                        newpPartNumber.textContent = `Part Number: ${partNumberEdit}`;
                        newarticle.appendChild(newpPartNumber);

                        const newpCondition = document.createElement('p');
                        newpCondition.textContent = `Condition: ${conditionEdit}`;
                        newarticle.appendChild(newpCondition);

                        const confirmBtn = document.createElement('button');
                        confirmBtn.textContent = 'Confirm';
                        confirmBtn.setAttribute('class', 'confirm-btn');
                        newli.appendChild(confirmBtn);

                        const cancelBtn = document.createElement('button');
                        cancelBtn.textContent = 'Cancel';
                        cancelBtn.setAttribute('class', 'cancel-btn');
                        newli.appendChild(cancelBtn);

                        confirmBtn.addEventListener('click', confirmFunc);
                        cancelBtn.addEventListener('click', cancelFunc);


                        function confirmFunc() {
                                newli.remove();

                                nextBtn.disabled = false;
                                completeImg.style.visibility = 'visible';
                                completeText.textContent = 'Part is Ordered!';
                        }

                        function cancelFunc() {
                                newli.remove();

                                nextBtn.disabled = false;
                        }
                }


                function edit() {
                        li.remove();

                        nextBtn.disabled = false;

                        modelInput.value = modelEdit;
                        yearInput.value = yearEdit;
                        partNameInput.value = partNameEdit;
                        partNumberInput.value = partNumberEdit;
                        conditionInput.value = conditionEdit;
                }

        }
}




