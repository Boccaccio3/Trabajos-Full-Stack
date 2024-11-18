const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");  
})

router.get("/about", (req, res) => {
    res.render("about");  
})

router.get("/contact", (req, res) => {
    res.render("contact");  
})


router.get("/*", (req, res) => {
    
    res.status(404).render("error",
        {
            error: "404. Página no encontrada"
        }
    );
})


// Error 500 generado por nostros
// router.get("/error", (req, res) => {
//     throw new Error("Error generado por el usuario");
// });

// router.use((err, req, res, nex) =>{
//     console.error(err.stack);
//     res.status(500).render("error",
//         {
//             error: err.message,
//         }
//     );
// });

module.exports = router;
