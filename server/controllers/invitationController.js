const Invite = require('../model/leagueinvitation');
const League = require('../model/leagues');
const User = require('../model/userSchema');

class InvitationController {
    static addinvitation = async (req, res) => {
    //     try {
    //         const { email } = req.body;
    //         const { id: leagueId } = req.params; // Assuming leagueId is in params
 
    //         const user = await User.findOne({ email: req.body.email });
    //         if (!user) {
    //             return res.status(404).json({ message: 'No user found with this email.' });
    //         }

    //         // Create an invitation
    //         const invitation = new Invite({
    //             email,
    //             userId: user.id,
    //             invitedBy: req.user.id, 
    //             leagueId,
              
    //         });

    //         // Save the invitation
    //         const savedInvitation = await invitation.save();

            // // Update the league with the invited user
            // const league = await League.findById(leagueId);
            // if (!league) {
            //     return res.status(404).json({ message: 'League not found.' });
            // }

            // // Add the userId to league's userId array
            // league.userId.push(user.id);

            // // Save the league
            // await league.save();

    //         res.status(200).json({
    //             message: 'Invitation added successfully.',
    //             invitationData: savedInvitation,
    //             leagueData: league
    //         });
    //     } catch (err) {
    //         console.error(err.message);
    //         res.status(500).json({ message:err.message });
    //     }
    // }

try{
    const league = await League.findById(req.params.id);
    const  user = await User.findOne({email:req.body.email});
    if(!user)
    {
        res.status(404).json({message:"user not find"});
    }
    const invitation = new Invite({
        email: req.body.email,
        userId: req.body.userId,
        invitedBy: req.body.invitedBy, // Assuming req.user is the authenticated user
        leagueId: league.id
        // status: 0 // Pending invitation
      });
  const  result=   await invitation.save();
res.status(200).json({message:"sucessfully invitation done",info:result});

    
    

}catch(err)
{ 
    console.log(err);
    res.status(500).json({message:err.message});
}


    }

static showall = async(req,res)=>{
    try{
        // let inviteid = req.params.id;
        const result = await Invite.find();
        res.status(200).json({message:"retrive successfully", data: result });
    }catch(err)
    {
        res.status(404).json({message:err.message});
    }
}
static searchleague = async (req, res) => {
    try {
      let leagueid = req.params.id;
      const result = await League.findById(leagueid);
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };


static deleteinvite = async(req,res)=>
{
    try {
        const data = req.params.id;
        const result = await Invite.findByIdAndDelete(data);
        res
          .status(200)
          .json({ message: "invitation deleted successfully", info: result });
      } catch (err) {
        res.status(404).json({ error: err.message });
      }
}

}

module.exports = InvitationController;
