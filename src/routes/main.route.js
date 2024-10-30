const express = require("express");
const router = express.Router();

router.get("/auth/google/callback", GOOGLE_AUTH.AUTH_GOOGLE);

router.get("/google-sheets-webhook/voe", GOOGLE_HOOK.GOOGLE_HOOK_SERVICE);

router.get("/sovereq", MAIN_CONT.REQSVOE);

router.get("/soveres/3/", MAIN_CONT.REQPICCON);

router.post("/soveres/", MAIN_CONT.REQRESFRM); // response form

router.get("/ul", MAIN_CONT.REQUSERLIST); //user list

router.post("/sovereqid", MAIN_CONT.REQBYID); //user list by ID

router.post("/login/", MAIN_CONT.AUTH); // authentication

// router.post("/pathTest/", MAIN_CONT.CHKAUTH, MAIN_CONT.FORTEST) // authentication

router.post("/piclist/", MAIN_CONT.CHKAUTH, MAIN_CONT.REQPICLIST); // authentication

// router.post("/cfrm/2/", MAIN_CONT.CHKAUTH, MAIN_CONT.CONFREQ) // confirm status 3

router.post("/cfrm/2/", MAIN_CONT.CONFREQ); // confirm status 3

router.post(
  "/cfrm/3/",
  upload.single("img"),
  MAIN_CONT.CHKAUTH,
  MAIN_CONT.INATIONDTIL
); //insert action detail

router.post(
  "/cfrm/4/",
  upload.single("img"),
  MAIN_CONT.CHKAUTH,
  MAIN_CONT.UPATIONDTIL
); //update action detail

router.post("/cfrm/5/", MAIN_CONT.CHKAUTH, MAIN_CONT.UPFNLAPPR); //update action detail

module.exports = router;

// https://script.google.com/macros/s/AKfycbxPrvaeM796xFcc3fx4h3u3DRih-VbDxLRYJYcp8Vk5aQ6oo2FTZTpogUzU0c13s6h_/exec

// AKfycbxPrvaeM796xFcc3fx4h3u3DRih-VbDxLRYJYcp8Vk5aQ6oo2FTZTpogUzU0c13s6h_
