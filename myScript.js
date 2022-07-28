const actors = [
    { firstName: "Tom", lastName: "Hanks", gender: "male", img: "images/hanks.webp", url: "https://zh.wikipedia.org/zh-tw/%E6%B1%A4%E5%A7%86%C2%B7%E6%B1%89%E5%85%8B%E6%96%AF" },
    { firstName: "Jude", lastName: "Law", gender: "male", img: "images/law.jpg", url: "https://zh.wikipedia.org/wiki/%E8%A3%98%E5%BE%B7%C2%B7%E6%B4%9B" },
    { firstName: "Will", lastName: "Smith", gender: "male", img: "images/smith.webp", url: "https://zh.wikipedia.org/wiki/%E5%A8%81%E7%88%BE%C2%B7%E5%8F%B2%E5%AF%86%E6%96%AF" },
    { firstName: "Amber", lastName: "Heard", gender: "female", img: "images/Heard.jpg", url: "https://zh.wikipedia.org/wiki/%E5%AE%89%E6%9F%8F%C2%B7%E8%B5%AB%E5%BE%B7" },
    { firstName: "Johnny", lastName: "Depp", gender: "male", img: "images/Depp.jpg", url: "https://zh.wikipedia.org/wiki/%E5%BC%B7%E5%B0%BC%C2%B7%E6%88%B4%E6%99%AE" },
    { firstName: "Elizabeth", lastName: "Olsen", gender: "female", img: "images/olson.webp", url: "https://zh.wikipedia.org/zh-tw/%E4%BC%8A%E4%B8%BD%E8%8E%8E%E7%99%BD%C2%B7%E5%A5%A5%E5%B0%94%E6%A3%AE" },
    { firstName: "Benedict", lastName: "Cumberbatch", gender: "male", img: "images/cumberbatch.jpg", url: "https://zh.wikipedia.org/wiki/%E7%8F%AD%E5%A5%88%E7%8B%84%E5%85%8B%C2%B7%E5%BA%B7%E6%9F%8F%E6%8B%9C%E5%8D%80" },
    { firstName: "Oscar", lastName: "Isaac", gender: "male", img: "images/Isaac.webp", url: "https://zh.wikipedia.org/wiki/%E5%A5%A5%E6%96%AF%E5%8D%A1%C2%B7%E4%BC%8A%E8%90%A8%E5%85%8B" },
    { firstName: "John", lastName: "Krasinski", gender: "male", img: "images/Krasinski.webp", url: "https://zh.wikipedia.org/wiki/%E7%B4%84%E7%BF%B0%C2%B7%E5%8D%A1%E6%8B%89%E8%BE%9B%E6%96%AF%E5%9F%BA" },
    { firstName: "Rachel", lastName: "McAdams", gender: "female", img: "images/McAdams.jpg", url: "https://zh.wikipedia.org/wiki/%E7%91%9E%E7%A7%8B%C2%B7%E9%BA%A5%E4%BA%9E%E7%95%B6%E6%96%AF" },
    { firstName: "Tom", lastName: "Cruise", gender: "male", img: "images/Cruise.webp", url: "https://zh.wikipedia.org/wiki/%E6%B9%AF%E5%A7%86%C2%B7%E5%85%8B%E9%AD%AF%E6%96%AF" },
    { firstName: "Charlize", lastName: "Theron", gender: "female", img: "images/Theron.jpg", url: "https://zh.wikipedia.org/wiki/%E6%9F%A5%E7%90%86%E5%85%B9%C2%B7%E5%A1%9E%E9%9A%86" },
    // { firstName: "Ana de", lastName: "Armas", gender: "female", img: "images/Armas.webp", url: "https://zh.wikipedia.org/wiki/%E5%AE%89%E5%A8%9C%C2%B7%E5%BE%B7%E5%93%88%E7%91%AA%E6%96%AF" },
    { firstName: "Sophie", lastName: "Turner", gender: "female", img: "images/Turner.webp", url: "https://zh.wikipedia.org/w/index.php?search=Sophie%20Turner&title=Special%3A%E6%90%9C%E7%B4%A2&fulltext=1&ns0=1" },
    // { firstName: "Sandra", lastName: "Bullock", gender: "female", img: "images/Bullock.jpg", url: "https://zh.wikipedia.org/wiki/%E7%8F%8A%E5%8D%93%C2%B7%E5%B8%83%E6%8B%89%E5%85%8B" },
    { firstName: "Anya", lastName: "Taylor-Joy", gender: "female", img: "images/Taylor-Joy.webp", url: "https://zh.wikipedia.org/wiki/%E5%AE%89%E9%9B%85%C2%B7%E6%B3%B0%E5%8B%92-%E5%96%AC%E4%BC%8A" },
    { firstName: "Jennifer", lastName: "Connelly", gender: "female", img: "images/Connelly.jpg", url: "https://zh.wikipedia.org/wiki/%E7%8F%8D%E5%A6%AE%E4%BD%9B%C2%B7%E5%BA%B7%E7%B4%8D%E8%8E%89" },
    { firstName: "Tom", lastName: "Holland", gender: "male", img: "images/Holland.jpg", url: "https://zh.wikipedia.org/wiki/%E6%B1%A4%E5%A7%86%C2%B7%E8%B5%AB%E5%85%B0%E5%BE%B7" },
    { firstName: "Nicolas", lastName: "Cage", gender: "male", img: "images/Cage.webp", url: "https://zh.wikipedia.org/wiki/%E5%B0%BC%E5%8F%A4%E6%8B%89%E6%96%AF%C2%B7%E5%87%AF%E5%A5%87" },
    { firstName: "Brad", lastName: "Pitt", gender: "male", img: "images/Pitt.jpg", url: "https://zh.wikipedia.org/wiki/%E7%95%A2%C2%B7%E5%BD%BC%E7%89%B9" },
    { firstName: "Robert", lastName: "Pattinson", gender: "male", img: "images/Pattinson.webp", url: "https://zh.wikipedia.org/wiki/%E7%BE%85%E4%BC%AF%C2%B7%E6%B4%BE%E6%B1%80%E6%A3%AE" },
    { firstName: "Zendaya", lastName: "", gender: "female", img: "images/Zendaya.jpg", url: "https://zh.wikipedia.org/wiki/%E8%B5%9E%E8%BE%BE%E4%BA%9A" },
    { firstName: "Colin", lastName: "Firth", gender: "male", img: "images/Firth.jpg", url: "https://zh.wikipedia.org/wiki/%E5%93%A5%E9%80%A3%C2%B7%E8%B2%BB%E5%A4%AB" },
    { firstName: "Zac", lastName: "Efron", gender: "male", img: "images/Efron.webp", url: "https://zh.wikipedia.org/wiki/%E6%9F%B4%E5%85%8B%C2%B7%E8%89%BE%E5%BC%97%E9%9A%86" },
    { firstName: "Alexandra", lastName: "Daddario", gender: "female", img: "images/Daddario.webp", url: "https://zh.wikipedia.org/wiki/%E4%BA%9E%E6%AD%B7%E7%8F%8A%E5%8D%93%C2%B7%E9%81%94%E8%BF%AA%E8%8E%89%E5%A5%A7" },
    { firstName: "Lily", lastName: "James", gender: "female", img: "images/James.jpg", url: "https://zh.wikipedia.org/wiki/%E8%8E%89%E8%8E%89%C2%B7%E8%A9%B9%E5%A7%86%E6%96%AF" },
    // { firstName: "Rebecca", lastName: "Ferguson", gender: "female", img: "images/Ferguson.jpg", url: "https://zh.wikipedia.org/wiki/%E4%B8%BD%E8%B4%9D%E5%8D%A1%C2%B7%E5%BC%97%E6%A0%BC%E6%A3%AE" },
    { firstName: "Ryan", lastName: "Reynolds", gender: "male", img: "images/Reynolds.jpeg", url: "https://zh.wikipedia.org/wiki/%E8%90%8A%E6%81%A9%C2%B7%E9%9B%B7%E8%AB%BE%E6%96%AF" },
    // { firstName: "Josh", lastName: "Brolin", gender: "male", img: "images/Brolin.jpg", url: "https://zh.wikipedia.org/wiki/%E5%96%AC%E8%A8%B1%C2%B7%E5%B8%83%E6%B4%9B%E6%9E%97" },
    { firstName: "Andrew", lastName: "Garfield", gender: "male", img: "images/Garfield.jpg", url: "https://zh.wikipedia.org/wiki/%E5%AE%89%E5%BE%B7%E9%AD%AF%C2%B7%E5%8A%A0%E8%8F%B2%E7%88%BE%E5%BE%B7" },
    { firstName: "Blake", lastName: "Lively", gender: "female", img: "images/Lively.jpg", url: "https://zh.wikipedia.org/wiki/%E5%B8%83%E8%95%BE%E5%85%8B%C2%B7%E8%90%8A%E8%8A%99%E8%8E%89" },
    { firstName: "Adam", lastName: "Sandler", gender: "male", img: "images/Sandler.webp", url: "https://zh.wikipedia.org/wiki/%E4%BA%9E%E7%95%B6%C2%B7%E5%B1%B1%E5%BE%B7%E5%8B%92" },
    { firstName: "Colin", lastName: "Farrell", gender: "male", img: "images/Farrell.jpg", url: "https://zh.wikipedia.org/wiki/%E7%A7%91%E6%9E%97%C2%B7%E6%B3%95%E9%9B%B7%E5%B0%94" },
    { firstName: "Leonardo", lastName: "DiCaprio", gender: "male", img: "images/DiCaprio.webp", url: "https://zh.wikipedia.org/zh-tw/%E8%8E%B1%E6%98%82%E7%BA%B3%E5%A4%9A%C2%B7%E8%BF%AA%E5%8D%A1%E6%99%AE%E9%87%8C%E5%A5%A5" },
    { firstName: "Channing", lastName: "Tatum", gender: "male", img: "images/Tatum.jpg", url: "https://zh.wikipedia.org/wiki/%E6%9F%A5%E5%B0%BC%C2%B7%E6%B3%B0%E5%9D%A6" },
    { firstName: "Tom", lastName: "Hardy", gender: "male", img: "images/Hardy.webp", url: "https://zh.wikipedia.org/wiki/%E6%B9%AF%E5%A7%86%C2%B7%E5%93%88%E8%BF%AA" },
    { firstName: "Natalie", lastName: "Portman", gender: "female", img: "images/Portman.jpg", url: "https://zh.wikipedia.org/wiki/%E5%A8%9C%E5%A1%94%E8%8E%89%C2%B7%E6%B3%A2%E7%89%B9%E6%9B%BC" },
    { firstName: "Margot", lastName: "Robbie", gender: "female", img: "images/Robbie.jpg", url: "https://zh.wikipedia.org/wiki/%E7%91%AA%E6%AD%8C%C2%B7%E7%BE%85%E6%AF%94" },
    { firstName: "Bryce", lastName: "Dallas Howard", gender: "female", img: "images/Howard.webp", url: "https://zh.wikipedia.org/wiki/%E5%B8%83%E8%8E%B1%E6%96%AF%C2%B7%E8%BE%BE%E6%8B%89%E6%96%AF%C2%B7%E9%9C%8D%E5%8D%8E%E5%BE%B7" },
    { firstName: "Timothée", lastName: "Chalamet", gender: "male", img: "images/Chalamet.webp", url: "https://zh.wikipedia.org/wiki/%E6%8F%90%E6%91%A9%E8%A5%BF%C2%B7%E5%A4%8F%E5%8B%92%E6%A2%85" },
    { firstName: "Liam", lastName: "Neeson", gender: "male", img: "images/Neeson.webp", url: "https://zh.wikipedia.org/wiki/%E9%80%A3%E6%81%A9%C2%B7%E5%B0%BC%E9%81%9C" },
    { firstName: "Chris", lastName: "Pine", gender: "male", img: "images/Pine.webp", url: "https://zh.wikipedia.org/wiki/%E5%85%8B%E9%87%8C%E6%96%AF%C2%B7%E6%BD%98%E6%81%A9" },
    { firstName: "Daniel", lastName: "Radcliffe", gender: "male", img: "images/Radcliffe.jpg", url: "https://zh.wikipedia.org/wiki/%E4%B8%B9%E5%B0%BC%E5%B0%94%C2%B7%E6%8B%89%E5%BE%B7%E5%85%8B%E5%88%A9%E5%A4%AB" },
    { firstName: "Bruce", lastName: "Willis", gender: "male", img: "images/Willis.webp", url: "https://zh.wikipedia.org/wiki/%E5%B8%83%E9%B2%81%E6%96%AF%C2%B7%E5%A8%81%E5%88%A9%E6%96%AF" },
    { firstName: "Dwayne", lastName: "Johnson", gender: "male", img: "images/Johnson.jpg", url: "https://zh.wikipedia.org/wiki/%E5%B7%A8%E7%9F%B3%E5%BC%B7%E6%A3%AE" },
    { firstName: "Christian", lastName: "Bale", gender: "male", img: "images/Bale.webp", url: "https://zh.wikipedia.org/wiki/%E5%85%8B%E9%87%8C%E6%96%AF%E6%B1%80%C2%B7%E8%B2%9D%E7%88%BE" },
    { firstName: "Robert", lastName: "Downey Jr.", gender: "male", img: "images/Downey Jr..webp", url: "https://zh.wikipedia.org/wiki/%E5%B0%8F%E5%8B%9E%E5%8B%83%C2%B7%E9%81%93%E5%B0%BC" },
    { firstName: "Keira", lastName: "Knightley", gender: "female", img: "images/Knightley.webp", url: "https://zh.wikipedia.org/wiki/%E5%A7%AC%E6%8B%89%C2%B7%E9%BA%97%E8%8E%89" },
    { firstName: "Dakota", lastName: "Fanning", gender: "female", img: "images/Fanning.jpg", url: "https://zh.wikipedia.org/wiki/%E9%81%94%E7%A7%91%E5%A1%94%C2%B7%E8%8A%AC%E5%A6%AE" },
    { firstName: "Henry", lastName: "Cavill", gender: "male", img: "images/Cavill.webp", url: "https://zh.wikipedia.org/zh-tw/%E4%BA%A8%E5%88%A9%C2%B7%E5%8D%A1%E7%B6%AD%E7%88%BE" },
    { firstName: "Keanu", lastName: "Reeves", gender: "male", img: "images/Reeves.webp", url: "https://zh.wikipedia.org/wiki/%E5%9F%BA%E5%8A%AA%C2%B7%E9%87%8C%E7%BB%B4%E6%96%AF" },
    { firstName: "Mark", lastName: "Wahlberg", gender: "male", img: "images/Wahlberg.webp", url: "https://zh.wikipedia.org/zh-tw/%E9%A6%AC%E5%85%8B%C2%B7%E8%8F%AF%E4%BC%AF%E6%A0%BC" },
    { firstName: "Scarlett", lastName: "Johansson", gender: "female", img: "images/Johansson.webp", url: "https://zh.wikipedia.org/wiki/%E5%8F%B2%E5%98%89%E8%95%BE%C2%B7%E5%96%AC%E9%9F%93%E6%A3%AE" },
    { firstName: "Ezra", lastName: "Miller", gender: "male", img: "images/Miller.webp", url: "https://zh.wikipedia.org/wiki/%E5%9F%83%E5%85%B9%E6%8B%89%C2%B7%E7%B1%B3%E5%8B%92" },
    { firstName: "Emilia", lastName: "Clarke", gender: "female", img: "images/Clarke.webp", url: "https://zh.wikipedia.org/wiki/%E8%89%BE%E7%BE%8E%E8%8E%89%C2%B7%E5%85%8B%E6%8B%89%E5%85%8B" },
    { firstName: "Naomi", lastName: "Scott", gender: "female", img: "images/Scott.jpg", url: "https://zh.wikipedia.org/wiki/%E5%A8%9C%E6%AD%90%E8%9C%9C%C2%B7%E5%8F%B2%E8%80%83%E7%89%B9" },
    { firstName: "Chris", lastName: "Evans", gender: "male", img: "images/Evans.webp", url: "https://zh.wikipedia.org/wiki/%E5%85%8B%E9%87%8C%E6%96%AF%C2%B7%E5%9F%83%E6%96%87%E6%96%AF" },
    { firstName: "Chris", lastName: "Hemsworth", gender: "male", img: "images/Hemsworth.webp", url: "https://zh.wikipedia.org/zh-tw/%E5%85%8B%E9%87%8C%E6%96%AF%C2%B7%E6%B5%B7%E5%A7%86%E6%96%AF%E6%B2%83%E6%96%AF" },
    { firstName: "Chris", lastName: "Pratt", gender: "male", img: "images/Pratt.webp", url: "https://zh.wikipedia.org/wiki/%E5%85%8B%E9%87%8C%E6%96%AF%C2%B7%E6%99%AE%E7%91%9E%E7%89%B9" },
    { firstName: "Matthew", lastName: "McConaughey", gender: "male", img: "images/McConaughey.webp", url: "https://zh.wikipedia.org/wiki/%E9%A9%AC%E4%BF%AE%C2%B7%E9%BA%A6%E5%BA%B7%E7%BA%B3" },
    { firstName: "Ben", lastName: "Affleck", gender: "male", img: "images/Affleck.webp", url: "https://zh.wikipedia.org/wiki/%E6%9C%AC%C2%B7%E9%98%BF%E5%BC%97%E8%8E%B1%E5%85%8B" },
    { firstName: "Alicia", lastName: "Vikander", gender: "female", img: "images/Vikander.jpg", url: "https://zh.wikipedia.org/wiki/%E8%89%BE%E8%8E%89%E8%A5%BF%E4%BA%9E%C2%B7%E8%96%87%E5%9D%8E%E5%BE%B7" },
    { firstName: "Tom", lastName: "Hiddleston", gender: "male", img: "images/Hiddleston.jpg", url: "https://zh.wikipedia.org/wiki/%E6%B1%A4%E5%A7%86%C2%B7%E5%B8%8C%E5%BE%B7%E5%8B%92%E6%96%AF%E9%A1%BF" },
    { firstName: "Harrison", lastName: "Ford", gender: "male", img: "images/Ford.webp", url: "https://zh.wikipedia.org/wiki/%E5%93%88%E9%87%8C%E6%A3%AE%C2%B7%E7%A6%8F%E7%89%B9" },
    { firstName: "Anne", lastName: "Hathaway", gender: "female", img: "images/Hathaway.jpg", url: "https://zh.wikipedia.org/wiki/%E5%AE%89%E5%A6%AE%C2%B7%E6%B5%B7%E7%91%9F%E8%96%87" },
    { firstName: "Amy", lastName: "Adams", gender: "female", img: "images/Adams.jpg", url: "https://zh.wikipedia.org/zh-tw/%E8%89%BE%E7%BE%8E%C2%B7%E4%BA%9E%E7%95%B6%E6%96%AF" },
    { firstName: "Brie", lastName: "Larson", gender: "female", img: "images/Larson.jpg", url: "https://zh.wikipedia.org/wiki/%E5%B8%83%E4%B8%BD%C2%B7%E6%8B%89%E5%B0%94%E6%A3%AE" },
    { firstName: "Ryan", lastName: "Gosling", gender: "male", img: "images/Gosling.jpg", url: "https://zh.wikipedia.org/wiki/%E7%91%9E%E6%81%A9%C2%B7%E9%AB%98%E6%96%AF%E6%9E%97" },
    { firstName: "Emily", lastName: "Blunt", gender: "female", img: "images/Blunt.jpg", url: "https://zh.wikipedia.org/wiki/%E6%84%9B%E8%9C%9C%E8%8E%89%C2%B7%E5%B8%83%E6%9C%97" },
    { firstName: "Jake", lastName: "Gyllenhaal", gender: "male", img: "images/Gyllenhaal.webp", url: "https://zh.wikipedia.org/zh-tw/%E6%9D%B0%E5%85%8B%C2%B7%E5%90%89%E6%9E%97%E5%93%88%E5%B0%94" },
    { firstName: "Ben", lastName: "Stiller", gender: "male", img: "images/Stiller.jpg", url: "https://zh.wikipedia.org/wiki/%E7%8F%AD%C2%B7%E5%8F%B2%E6%8F%90%E5%8B%92" },
    { firstName: "Jennifer", lastName: "Lawrence", gender: "female", img: "images/Lawrence.jpg", url: "https://zh.wikipedia.org/wiki/%E7%8F%8D%E5%A6%AE%E4%BD%9B%C2%B7%E5%8B%9E%E5%80%AB%E6%96%AF" },
    { firstName: "Jim", lastName: "Carrey", gender: "male", img: "images/Carrey.jpg", url: "https://zh.wikipedia.org/wiki/%E5%8D%A0%C2%B7%E5%9F%BA%E5%88%A9" },
    { firstName: "Rosamund", lastName: "Pike", gender: "female", img: "images/Pike.webp", url: "https://zh.wikipedia.org/wiki/%E8%A3%B4%E6%B7%B3%E5%8D%8E" },
    { firstName: "Denzel", lastName: "Washington", gender: "male", img: "images/Washington.webp", url: "https://zh.wikipedia.org/wiki/%E4%B8%B9%E6%B3%BD%E5%B0%94%C2%B7%E5%8D%8E%E7%9B%9B%E9%A1%BF" },
    { firstName: "Eva", lastName: "Green", gender: "female", img: "images/Green.webp", url: "https://zh.wikipedia.org/wiki/%E4%BC%8A%E5%A8%83%C2%B7%E6%A0%BC%E8%93%AE" },
    { firstName: "Jason", lastName: "Statham", gender: "male", img: "images/Statham.jpg", url: "https://zh.wikipedia.org/wiki/%E5%82%91%E6%A3%AE%C2%B7%E5%8F%B2%E5%A1%94%E6%A3%AE" },
    { firstName: "Gerard", lastName: "Butler", gender: "male", img: "images/Butler.webp", url: "https://zh.wikipedia.org/wiki/%E5%82%91%E6%8B%89%E5%BE%B7%C2%B7%E5%B7%B4%E7%89%B9%E5%8B%92" },
    { firstName: "Matt", lastName: "Damon", gender: "male", img: "images/Damon.webp", url: "https://zh.wikipedia.org/wiki/%E9%A9%AC%E7%89%B9%C2%B7%E6%88%B4%E8%92%99" },
    { firstName: "Sylvester", lastName: "Stallone", gender: "male", img: "images/Stallone.jpg", url: "https://zh.wikipedia.org/wiki/%E5%B8%AD%E7%B6%AD%E6%96%AF%C2%B7%E5%8F%B2%E7%89%B9%E9%BE%8D" },
    { firstName: "Chloë", lastName: "Grace Moretz", gender: "female", img: "images/Moretz.webp", url: "https://zh.wikipedia.org/wiki/%E7%A7%91%E6%B4%9B%C2%B7%E8%8E%AB%E7%91%9E%E5%85%B9" },
    { firstName: "Kristen", lastName: "Stewart", gender: "female", img: "images/Stewart.webp", url: "https://zh.wikipedia.org/wiki/%E5%85%8B%E8%8E%89%E7%B5%B2%E6%B1%80%C2%B7%E5%8F%B2%E9%83%BD%E8%8F%AF" },
    { firstName: "Gal", lastName: "Gadot", gender: "female", img: "images/Gadot.webp", url: "https://zh.wikipedia.org/wiki/%E7%9B%96%E5%B0%94%C2%B7%E5%8A%A0%E6%9C%B5" },
    { firstName: "Brendan", lastName: "Fraser", gender: "male", img: "images/Fraser.webp", url: "https://zh.wikipedia.org/wiki/%E5%B8%83%E8%98%AD%E7%99%BB%C2%B7%E8%B2%BB%E9%9B%AA" },
    { firstName: "Clint", lastName: "Eastwood", gender: "male", img: "images/Eastwood.jpg", url: "https://zh.wikipedia.org/wiki/%E5%85%8B%E6%9E%97%C2%B7%E4%BC%8A%E6%96%AF%E5%A8%81%E7%89%B9" },
    { firstName: "Paul", lastName: "Bettany", gender: "male", img: "images/Bettany.webp", url: "https://zh.wikipedia.org/wiki/%E4%BF%9D%E7%BE%85%C2%B7%E5%BD%BC%E7%89%B9%E5%B0%BC" },
    { firstName: "Idris", lastName: "Elba", gender: "male", img: "images/Elba.webp", url: "https://zh.wikipedia.org/wiki/%E4%BC%8A%E5%BE%B7%E7%91%9E%E6%96%AF%C2%B7%E8%89%BE%E5%B0%94%E5%B7%B4" },
    { firstName: "Kevin", lastName: "Spacey", gender: "male", img: "images/Spacey.jpg", url: "https://zh.wikipedia.org/wiki/%E5%87%B1%E6%96%87%C2%B7%E6%96%AF%E8%B2%9D%E8%A5%BF" },
    { firstName: "Jason", lastName: "Momoa", gender: "male", img: "images/Momoa.webp", url: "https://zh.wikipedia.org/wiki/%E6%9D%B0%E6%A3%AE%C2%B7%E8%8E%AB%E7%8E%9B" },
    { firstName: "Emma", lastName: "Stone", gender: "female", img: "images/Stone.jpg", url: "https://zh.wikipedia.org/wiki/%E8%89%BE%E7%91%AA%C2%B7%E5%8F%B2%E6%9D%B1" },
    { firstName: "Milla", lastName: "Jovovich", gender: "female", img: "images/Jovovich.jpg", url: "https://zh.wikipedia.org/wiki/%E7%B1%B3%E6%8B%89%C2%B7%E4%B9%94%E6%B2%83%E7%BB%B4%E5%A5%87" },
    { firstName: "Jessica", lastName: "Chastain", gender: "female", img: "images/Chastain.webp", url: "https://zh.wikipedia.org/wiki/%E6%9D%B0%E8%A5%BF%E5%8D%A1%C2%B7%E6%9F%A5%E6%96%AF%E5%9D%A6" },
    // { firstName: "Megan", lastName: "Fox", gender: "female", img: "images/Fox.jpg", url: "https://zh.wikipedia.org/wiki/%E7%BE%8E%E7%91%BE%C2%B7%E9%9C%8D%E7%B5%B2" },
    { firstName: "Daniel", lastName: "Craig", gender: "male", img: "images/Craig.webp", url: "https://zh.wikipedia.org/wiki/%E4%B8%B9%E5%B0%BC%E5%B0%94%C2%B7%E5%85%8B%E9%9B%B7%E6%A0%BC" },
    { firstName: "Rachel", lastName: "Weisz", gender: "female", img: "images/Weisz.jpg", url: "https://zh.wikipedia.org/wiki/%E9%BA%97%E7%B4%A0%C2%B7%E6%85%A7%E7%B5%B2" },
    { firstName: "Jennifer", lastName: "Aniston", gender: "female", img: "images/Aniston.webp", url: "https://zh.wikipedia.org/wiki/%E8%A9%B9%E5%A6%AE%E5%BC%97%C2%B7%E5%AE%89%E5%A6%AE%E6%96%AF%E9%A1%BF" },
    { firstName: "Kate", lastName: "Beckinsale", gender: "female", img: "images/Beckinsale.jpg", url: "https://zh.wikipedia.org/wiki/%E5%87%B1%E7%89%B9%C2%B7%E8%B2%9D%E7%90%B4%E8%96%A9" },
    { firstName: "Julia", lastName: "Roberts", gender: "female", img: "images/Roberts.jpg", url: "https://zh.wikipedia.org/wiki/%E8%8C%B1%E8%8E%89%E5%A8%85%C2%B7%E7%BD%97%E4%BC%AF%E8%8C%A8" },
    { firstName: "Jean", lastName: "Reno", gender: "male", img: "images/Reno.jpg", url: "https://zh.wikipedia.org/wiki/%E5%B0%9A%C2%B7%E9%80%A3%E5%A5%B4" },
    { firstName: "Woody", lastName: "Harrelson", gender: "male", img: "images/Harrelson.jpg", url: "https://zh.wikipedia.org/wiki/%E4%BC%8D%E8%BF%AA%C2%B7%E5%93%88%E9%87%8C%E6%A3%AE" },
    { firstName: "Vin", lastName: "Diesel", gender: "male", img: "images/Diesel.jpg", url: "https://zh.wikipedia.org/wiki/%E9%A6%AE%C2%B7%E8%BF%AA%E7%B4%A2" },
    { firstName: "Orlando", lastName: "Bloom", gender: "male", img: "images/Bloom.jpg", url: "https://zh.wikipedia.org/wiki/%E5%A5%A5%E5%85%B0%E5%A4%9A%C2%B7%E5%B8%83%E9%B2%81%E5%A7%86" },
    { firstName: "Samuel", lastName: "L. Jackson", gender: "male", img: "images/Jackson.jpg", url: "https://zh.wikipedia.org/wiki/%E6%A3%AE%E5%A7%86%C2%B7%E7%A9%8D%E9%81%9C" },
    { firstName: "Bradley", lastName: "Cooper", gender: "male", img: "images/Cooper.jpg", url: "https://zh.wikipedia.org/wiki/%E5%B8%83%E8%90%8A%E5%BE%B7%E5%88%A9%C2%B7%E5%BA%AB%E6%9F%8F" },
    { firstName: "Paul", lastName: "Rudd", gender: "male", img: "images/Rudd.jpg", url: "https://zh.wikipedia.org/wiki/%E4%BF%9D%E7%BE%85%C2%B7%E8%B7%AF%E5%BE%B7" },
    { firstName: "Anna", lastName: "Kendrick", gender: "male", img: "images/Kendrick.webp", url: "https://zh.wikipedia.org/wiki/%E5%AE%89%E5%A8%9C%C2%B7%E5%A7%AC%E5%A6%B2%E5%A6%AE" },
    { firstName: "George", lastName: "Clooney", gender: "male", img: "images/Clooney.jpg", url: "https://zh.wikipedia.org/wiki/%E4%BD%90%E6%B2%BB%C2%B7%E5%8F%A4%E5%B0%BC" },
    { firstName: "Angelina", lastName: "Jolie", gender: "female", img: "images/Jolie.jpg", url: "https://zh.wikipedia.org/wiki/%E5%AE%89%E5%90%89%E4%B8%BD%E5%A8%9C%C2%B7%E6%9C%B1%E8%8E%89" },
    { firstName: "John", lastName: "Travolta", gender: "male", img: "images/Travolta.jpg", url: "https://zh.wikipedia.org/wiki/%E7%BA%A6%E7%BF%B0%C2%B7%E7%89%B9%E6%8B%89%E6%B2%83%E5%B0%94%E5%A1%94" },
    { firstName: "Kate", lastName: "Winslet", gender: "female", img: "images/Winslet.jpg", url: "https://zh.wikipedia.org/wiki/%E5%87%B1%E7%89%B9%C2%B7%E6%BA%AB%E6%96%AF%E8%95%BE" },
    { firstName: "Reese", lastName: "Witherspoon", gender: "female", img: "images/Witherspoon.webp", url: "https://zh.wikipedia.org/wiki/%E9%BA%97%E7%B5%B2%C2%B7%E9%9F%8B%E8%8A%B1%E7%B5%B2%E6%BD%98" },
    { firstName: "Penélope", lastName: "Cruz", gender: "female", img: "images/Cruz.jpg", url: "https://zh.wikipedia.org/wiki/%E4%BD%A9%E5%86%85%E6%B4%9B%E6%99%AE%C2%B7%E5%85%8B%E9%B2%81%E5%85%B9" },
    { firstName: "Emma", lastName: "Watson", gender: "female", img: "images/Watson.webp", url: "https://zh.wikipedia.org/wiki/%E8%89%BE%E7%8E%9B%C2%B7%E6%B2%83%E6%A3%AE" },
    { firstName: "Jeremy", lastName: "Renner", gender: "male", img: "images/Renner.webp", url: "https://zh.wikipedia.org/wiki/%E6%9D%B0%E7%91%9E%E7%B1%B3%C2%B7%E9%9B%B7%E7%BA%B3" },
    { firstName: "Lily", lastName: "Collins", gender: "female", img: "images/Collins.jpg", url: "https://zh.wikipedia.org/zh-tw/%E8%8E%89%E8%8E%89%C2%B7%E6%9F%AF%E6%9E%97%E6%96%AF" },
    { firstName: "Cameron", lastName: "Diaz", gender: "female", img: "images/Diaz.webp", url: "https://zh.wikipedia.org/wiki/%E5%8D%A1%E9%BA%A5%E8%93%89%C2%B7%E7%8B%84%E4%BA%9E%E8%8C%B2" },
    { firstName: "Saoirse", lastName: "Ronan", gender: "male", img: "images/Ronan.jpg", url: "https://zh.wikipedia.org/wiki/%E7%91%9F%E5%A4%8F%C2%B7%E7%BE%85%E5%8D%97" },
    { firstName: "Nicholas", lastName: "Hoult", gender: "male", img: "images/Hoult.jpg", url: "https://zh.wikipedia.org/wiki/%E5%B0%BC%E5%8F%A4%E6%8B%89%E6%96%AF%C2%B7%E9%9C%8D%E5%B0%94%E7%89%B9" },
    { firstName: "Joaquin", lastName: "Phoenix", gender: "male", img: "images/Phoenix.jpg", url: "https://zh.wikipedia.org/wiki/%E8%8F%AF%E5%A0%85%C2%B7%E9%A6%AE%E5%8A%9B%E5%A3%AB" },
    { firstName: "Hugh", lastName: "Jackman", gender: "male", img: "images/Jackman.jpg", url: "https://zh.wikipedia.org/wiki/%E4%BC%91%C2%B7%E5%82%91%E5%85%8B%E6%9B%BC" },
    { firstName: "Michael", lastName: "Fassbender", gender: "male", img: "images/Fassbender.jpg", url: "https://zh.wikipedia.org/wiki/%E9%BA%A5%E5%8F%AF%C2%B7%E6%B3%95%E6%96%AF%E8%B3%93%E9%81%94" },
    { firstName: "Drew", lastName: "Barrymore", gender: "male", img: "images/Barrymore.jpg", url: "https://zh.wikipedia.org/wiki/%E8%8C%B1%E5%85%92%C2%B7%E8%8A%AD%E8%8E%89%E6%91%A9" },
    { firstName: "Jennifer", lastName: "Garner", gender: "male", img: "images/Garner.jpg", url: "https://zh.wikipedia.org/wiki/%E7%8F%8D%E5%A6%AE%E4%BD%9B%C2%B7%E5%98%89%E7%B4%8D" },
    { firstName: "Simon", lastName: "Pegg", gender: "male", img: "images/Pegg.jpg", url: "https://zh.wikipedia.org/wiki/%E8%A5%BF%E8%92%99%C2%B7%E6%9F%8F%E5%A5%87" },
    { firstName: "James", lastName: "McAvoy", gender: "male", img: "images/McAvoy.jpg", url: "https://zh.wikipedia.org/wiki/%E8%A9%B9%E5%A7%86%E6%96%AF%C2%B7%E9%BA%A5%E8%89%BE%E7%B6%AD" },
    { firstName: "Owen", lastName: "Wilson", gender: "male", img: "images/Wilson.webp", url: "https://zh.wikipedia.org/wiki/%E6%AD%90%E6%96%87%C2%B7%E5%A8%81%E7%88%BE%E6%A3%AE" },
    { firstName: "Luke", lastName: "Evans", gender: "male", img: "images/Evans2.webp", url: "https://zh.wikipedia.org/wiki/%E7%9B%A7%E5%85%8B%C2%B7%E4%BC%8A%E9%9B%B2%E6%96%AF" },
];

const Engletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var x = Math.floor(Math.random() * actors.length);

document.getElementById('actorimg').src = `${actors[x].img}`;
document.getElementById('wikiurl').href = `${actors[x].url}`;

var qqq = `${actors[x]}`;

window.onload = function () {
    intialize();
    hint();
    bottom();
    
}

var col = 0; //current letter for that attempt

var gameOver = false;


var fullname = `${actors[x].firstName + " " + actors[x].lastName}`.toUpperCase();
var fullnamegg = fullname.replace(/ /g, "!");
var fullname22 = fullname.replace(/(['\-' '' '.' ])/g, '');  // 去除 空格 . - 的姓名
var fname = `${actors[x].firstName}`.toUpperCase();
var lname = `${actors[x].lastName}`.toUpperCase();
var width = fullname.length; //length of the fullname


//隨機取得幾個陣列值
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

//下方區塊的姓名和其它字母隨機排列
let randomname = fullname22 + getRandomArrayElements(Engletter, (20 - fullname22.length)).join('');
//console.log(randomname);
let myArray = randomname.split("");
myArray = myArray.sort(function (a, b) { return 0.5 - Math.random() });

//把陣列切塊的函式
function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

var arrayChunks = sliceIntoChunks(myArray, 10)
var array1 = arrayChunks[0].concat("⌫")
var array2 = arrayChunks[1].concat("Enter")
let keyboard = [
    array1,
    array2
]

//上方區塊
function intialize() {
  
    for (var z = 0; z < fullname.length; z++) {
        var tile = document.createElement("span");
        if (`${fullname[z]}` == ".") {
            tiletext = document.createTextNode(".");
        } else if (`${fullname[z]}` == "-") {
            tiletext = document.createTextNode("-");
        } else if (`${fullname[z]}` == "!") {
            tiletext = document.createTextNode("!");
        } else {
            tiletext = document.createTextNode("");
        }

        tile.appendChild(tiletext);

        let nameArray = fullnamegg.split("");
        let name = nameArray[z];


        if (name == "!") {
            tile.classList.add("hide");
        }


        tile.id = 0 + "-" + z.toString();


        tile.classList.add("tile");

        document.getElementById("board").appendChild(tile);
    }
}

function bottom() {
    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            let currTile = document.getElementById(0 + '-' + col.toString());

            keyTile.innerText = key;
            //console.log(key);
            if (key == "Enter") {
                keyTile.id = "Enter";
            } else if (key == "⌫") {
                keyTile.id = "Backspace";
            } else if ("A" <= key && key <= "Z" || "Ë" || "É") {
                keyTile.id = "Key" + key; // "Key" + "A";
            }


            keyTile.addEventListener("click", processKey);
            
            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.getElementById("board22").appendChild(keyboardRow);
    }
}



function hint() {

    var currTile = document.getElementById(0 + '-' + col.toString());

    $('#hint_Firstname').one('click', function () {
        for (var z = 0, y = fname; z < y.length; z++)

            if (`${y[z]}` == ".") {
                $('.tile')[z].append('');
            } else if (`${y[z]}` == "-") {
                $('.tile')[z].append('');
            } else if ($('.tile')[z].innerText == `${y[z]}`) {
                $('.tile')[z].append('');
            } else if ($('.tile')[z].innerText != `${y[z]}`) {
                $('.tile')[z].innerText = (`${y[z]}`);
            } else {
                $('.tile')[z].append(`${fname[z]}`);
            }

        col = col + 5;

    }) //firstname提示結束

    $('#hint_Fullname').one('click', function () {
        for (var z = 0, y = fullname; z < y.length; z++)

            if (`${y[z]}` == ".") {
                $('.tile')[z].append('');
            } else if (`${y[z]}` == "-") {
                $('.tile')[z].append('');
            } else if ($('.tile')[z].innerText == `${y[z]}`) {
                $('.tile')[z].append('');
            } else if ($('.tile')[z].innerText != `${y[z]}`) {
                $('.tile')[z].innerText = (`${y[z]}`);
            } else {
                $('.tile')[z].append(`${y[z]}`);
            }


    }) //fullname提示結束

    $('#one').on('click', function () {
        if (`${fullname[col]}` == ".") {
            $('.tile')[col].append('');
            col += 1;
        } else if (`${fullname[col]}` == "-") {
            $('.tile')[col].append('');
            col += 1;
        } else if ($('.tile')[col].innerText == `${fullname[col]}`) {
            $('.tile')[col].append('');
            col += 1;
        } else if ($('.tile')[col].innerText != `${fullname[col]}`) {
            $('.tile')[col].innerText = (`${fullname[col]}`);

            col += 1;
        } else {
            $('.tile')[col].append(`${fullname[col]}`);
            col += 1;
        }
    })//one提示結束
}// hint function 結束


function processKey() {
    e = { "code": this.id };
    processInput(e);
}


function processInput(e) {
    if (gameOver) return;
    if ("KeyA" <= e.code && e.code <= "KeyZ" || "KeyË" == e.code || "KeyÉ" == e.code) {

        if (col < width) {

            let currTile = document.getElementById(0 + '-' + col.toString());

            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                col += 1;

            } else if (currTile.innerText == "-") {
                currTile.innerText = "-";
                col += 1;
            } else if (currTile.innerText == "!") {
                currTile.innerText = "!";
                col += 1;
            } else if (currTile.innerText == ".") {
                currTile.innerText = ".";
                col += 1;
            } else if (currTile.innerText == `${fullname[col]}`) {
                currTile.innerText = `${fullname[col]}`;
                col += 1;
            }

        }
    }

    else if (e.code == "Backspace") {

        if (0 < col && col <= width) {
            col -= 1;
        }

        let currTile = document.getElementById(0 + '-' + col.toString());
        currTile.classList.remove("correct");
        currTile.classList.remove("wrong");

        if (currTile.innerText == "-") {
            currTile.innerText = "-";
        } else if (currTile.innerText == "!") {
            currTile.innerText = "!";
        } else if (currTile.innerText == ".") {
            currTile.innerText = ".";
        } else {
            currTile.innerText = "";
        }

    }

    else if (e.code == "Enter") {
        update();
    }

}

function update() {
    //first iteration, check all the correct ones first
    for (let z = 0; z < width; z++) {
        var currTile = document.getElementById(0 + "-" + z.toString());
        let letter = currTile.innerText;
        //console.log(letter);
        //Is it in the correct position?
        

        if (fullname[z] == letter) {
           
            currTile.classList.add("correct");
            $('#wiki').show();
        }

        else if (fullname[z] != letter) {
            currTile.classList.add("wrong");
        }

    }
}



function myrefresh() {
    window.location.reload();

}

