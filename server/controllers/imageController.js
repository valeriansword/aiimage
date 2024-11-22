import userModel from "../models/userModel.js"
import FormData from 'form-data'
import axios from 'axios'





export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body
       
        const user = await userModel.findById(userId)

        if (!user || !prompt) {
            return res.json({ success: false, message: 'missing details' })
        }
        if (user.credit === 0 || userModel.credit < 0) {
            return res.json({ success: false, message: 'no credit left', credit: user.credit })
        }

        const formData = new FormData
        formData.append('prompt', prompt)
        
        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
            },
            responseType : 'arraybuffer'
        })

        const base64Img = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:image/png;base64,${base64Img}`
       // await userModel.findByIdAndUpdate(user._id, { credit: user.credit-1 })
        //res.json({success:true , message:'image genearated' , credit : user.credit-1 , resultImage:resultImage})
        res.json({success:true , message:'image genearated' ,  resultImage:resultImage})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}