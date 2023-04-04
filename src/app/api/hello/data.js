const fs = require('fs.realpath');

let data = require('../../../../data.json');

export const myData = {
    getAll: () => data,
    getById: id => data.find(item => item.id.toString() === id.toString()),
    getBySlug: slug => data.find(item => item.slug === slug),
    find: item => data.find(item),
    update
};

function update(id, params) {
    const vanasona = data.find(item => item.id.toString() === id.toString());
   
    Object.assign(vanasona, params);
    fs.writeFileSync('../../../../data.json', JSON.stringify(data, null, 4))
}




