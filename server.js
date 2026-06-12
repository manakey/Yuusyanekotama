const express = require('express');
const path = require('path');
const app = express();

// カレントフォルダ（.）にあるファイルをそのままブラウザに公開する
app.use(express.static(path.join(__dirname, '.')));

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
