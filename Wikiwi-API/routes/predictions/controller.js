const axios = require('axios');
const FormData = require('form-data');
const { Storage } = require('@google-cloud/storage');

const storage = new Storage({
  projectId: 'capstone-project-404600',
  keyFilename: './serviceAccount.json',
});

const bucketName = 'datasets-predict-image';

const getCategoryFolder = (category) => {
  // Membuat mapping antara kategori dan folder penyimpanan
  const categoryFolders = {
    karbo: 'kategori-karbo',
    sayur: 'kategori-sayur',
    kacang: 'kategori-kacang',
    daging: 'kategori-daging',
    rempah: 'kategori-rempah',
    buah: 'kategori-buah',
    daily: 'kategori-daily',
  };

  return categoryFolders[category];
};

const uploadFileToStorage = async (file, category) => {
  const bucket = storage.bucket(bucketName);

  // Tentukan nama file di bucket
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
  const fileName = getCategoryFolder(category) + '/' + file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop();

  const fileUpload = bucket.file(fileName);

  const stream = fileUpload.createWriteStream({
    resumable: false,
    metadata: {
      contentType: file.mimetype,
    },
  });

  // Salin file yang diunggah ke Google Cloud Storage
  await new Promise((resolve, reject) => {
    stream.on('error', reject);
    stream.on('finish', resolve);
    stream.end(file.buffer);
  });

  return fileName;
};

const mlCarb = async (req, res) => {
  try {
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    const fileName = await uploadFileToStorage(file, 'karbo');

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    const response = await axios.post('https://model-karbo-lmbe52aaka-et.a.run.app/', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('an error occurred while uploading the file');
  }
};

const mlVegetable = async (req, res) => {
  try {
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const fileName = await uploadFileToStorage(file, 'sayur');

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    const response = await axios.post('', formData, {
      headers: formData.getHeaders()
    });

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('an error occurred while uploading the file');
  }
};

const mlPeanut = async (req, res) => {
  try {
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const fileName = await uploadFileToStorage(file, 'kacang');

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    const response = await axios.post('', formData, {
      headers: formData.getHeaders()
    });

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('an error occurred while uploading the file');
  }
};

const mlMeat = async (req, res) => {
  try {
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const fileName = await uploadFileToStorage(file, 'daging');

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    const response = await axios.post('', formData, {
      headers: formData.getHeaders()
    });

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('an error occurred while uploading the file');
  }
};

const mlSpice = async (req, res) => {
  try {
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const fileName = await uploadFileToStorage(file, 'rempah');

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    const response = await axios.post('', formData, {
      headers: formData.getHeaders()
    });

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('an error occurred while uploading the file');
  }
};

const mlFruit = async (req, res) => {
  try {
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const fileName = await uploadFileToStorage(file, 'buah');

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    const response = await axios.post('', formData, {
      headers: formData.getHeaders()
    });

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('an error occurred while uploading the file');
  }
};

const mlDaily = async (req, res) => {
  try {
    const file = req.file;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }
    const fileName = await uploadFileToStorage(file, 'daily');

    const formData = new FormData();
    formData.append('file', req.file.buffer, { filename: req.file.originalname });

    const response = await axios.post('', formData, {
      headers: formData.getHeaders()
    });

    console.log(response.data);

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('an error occurred while uploading the file');
  }
};

module.exports = {
  mlCarb,
  mlVegetable,
  mlPeanut,
  mlDaily,
  mlMeat,
  mlFruit,
  mlSpice
};
