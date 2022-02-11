function commonElements(firstList, secondList) {
    for (let i = 0; i < firstList.length; i++) {
        let firstListElement = firstList[i];

        for(j = 0; j < secondList.length; j++) {
            let secondLIstElement = secondList[j];
            
            if(firstListElement === secondLIstElement) {
                console.log(firstListElement);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);