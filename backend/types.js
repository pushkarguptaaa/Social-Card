const zod = require("zod")

const socialMediaSchema = zod.object({
    platform: zod.string().min(1, "Platform name is required"),
    link: zod.string().url("Invalid url format")
})

const CardSchema = zod.object({
    name: zod.string().min(1, "Name is required"),
    description: zod.string().min(1, "Description is required"),
    socialMedia: zod.array(socialMediaSchema),
    interests: zod.array(zod.string().min(1, "Interests cannot be empty"))
})

module.exports = {
    CardSchema
}