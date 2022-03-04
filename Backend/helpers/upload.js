const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const bucketName = process.env.AWS_NAME_BUCKET;

const storage = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const uploadInBucket = (file, directoryNameInBucket) => {

  const stream = fs.createReadStream(file.tempFilePath);

  return storage.upload({
    Bucket: bucketName,
    Key: `${directoryNameInBucket}/${file.name}`,
    Body: stream,
  }).promise()

};

module.exports = { uploadInBucket };
