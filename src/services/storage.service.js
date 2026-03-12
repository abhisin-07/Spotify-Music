const { default: ImageKit } = require("@imagekit/nodejs")
const {}=require("@imagekit/nodejs")


const ImageKitClient=new ImageKit({
    password:process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file){
    const result=await ImageKitClient.files.upload({
        file,
        fileName:"music_"+Date.now(),
        folder:"yt-Spotify/music"
    })
    return result;
}

module.exports={uploadFile}