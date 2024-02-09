const mongo = require('./mongo')
const command = require('./command')

module.exports = (client) => {

    const cache = {}

    command(client, 'random', async (message) => {
        message.channel.send('Minimum number of vouchers?');

        message.channel.awaitMessages(m => m.author.id == message.author.id, {
          max: 1,
          time: 60000
        }).then(collected => {
            let minvouchernumber = collected.first().content;

            message.channel.send('Maximum number of vouchers?');
            message.channel.awaitMessages(m => m.author.id == message.author.id, {
              max: 1,
              time: 60000
            }).then(collected => {
                let maxvouchernumber = collected.first().content;

                if (parseInt(minvouchernumber) > parseInt(maxvouchernumber)) {
                  message.channel.send('follow directions ;)');
                } else {
                  let temprand = (Math.floor(Math.random(1) * (maxvouchernumber - minvouchernumber)));
                  temprand = parseInt(temprand) + parseInt(minvouchernumber); //pick random between minvouchernumber and maxvouchernumber
                  message.channel.send('number of vouchers: ' + temprand);

                  function boolDoItHave(chance) {
                    if (Math.floor(Math.random(1) * 100) <= parseInt(chance)) {
                        return true;
                      } else {
                        return false;
                      }
                    }

                    let arm = 0;
                    let ear = 0;
                    let eye = 0;
                    let foot = 0;
                    let hair = 0;
                    let head = 0;
                    let leg = 0;
                    let mouth = 0;
                    let neck = 0;
                    let nose = 0;
                    let tail = 0;
                    let tongue = 0;
                    let whisker = 0;
                    let teeth = 0;
                    let expression = 0;
                    let feather = 0;
                    let fur = 0;
                    let scale = 0;
                    let shapechange = 0;
                    let sizechange = 0;
                    let marking = 0;
                    let gradient = 0;
                    let blood = 0;
                    let removal = 0;
                    let flesh = 0;
                    let antennae = 0;
                    let extraeyes = 0;
                    let fin = 0;
                    let frill = 0;
                    let horn = 0;
                    let gemgrowth = 0;
                    let plantgrowth = 0;
                    let colorchange = 0;
                    let shell = 0;
                    let wing = 0;
                    let other = 0;

                    //for that random number times:
                    for (let i = 0; i < temprand; i++) {

                      //head 30, 1
                      if (head == 0) { //no current head
                        if (boolDoItHave(30) == true) {
                          //add a head
                          head += 1;
                          continue;
                        } //end if
                      } //end if
                      else if (head > 0) { //current head
                        if (boolDoItHave(1) == true) {
                          //add a head
                          head +=1;
                          continue;
                        } //end if
                      }

                      //shapechange 30, 15, 5
                      if (shapechange == 0) { //no current
                        if (boolDoItHave(30) == true) {
                          //add one
                          shapechange += 1;continue;
                        } //end if
                      } //end if
                      else if (shapechange == 1) { //1 current
                        if (boolDoItHave(15) == true) {
                          //add one
                          shapechange +=1;continue;
                        } //end if
                      } //end else if
                      else if (shapechange > 1) { //2+ current
                        if (boolDoItHave(5) == true) {
                          //add one
                          shapechange +=1;continue;
                        } //end if
                      } //end else if

                      //eye 20, 0
                      if (eye == 0) { //no current
                        if (boolDoItHave(20) == true) {
                          //add one
                          eye += 1;continue;
                        } //end if
                      } //end if
                      else if (eye > 0) { //current

                      }

                      //leg 20, 5, 1
                      if (leg == 0) { //no current
                        if (boolDoItHave(20) == true) {
                          //add one
                          leg += 1;continue;
                        } //end if
                      } //end if
                      else if (leg == 1) { //1 current
                        if (boolDoItHave(5) == true) {
                          //add one
                          leg +=1;continue;
                        } //end if
                      } //end else if
                      else if (leg > 1) { //2+ current
                        if (boolDoItHave(1) == true) {
                          //add one
                          leg +=1;continue;
                        } //end if
                      } //end else if

                      //arm 15, 1
                      if (arm == 0) { //no current
                        if (boolDoItHave(15) == true) {
                          //add one
                          arm += 1;continue;
                        } //end if
                      } //end if
                      else if (arm > 0) { //current
                        if (boolDoItHave(1) == true) {
                          //add one
                          arm +=1;continue;
                        } //end if
                      }

                      //mouth 10, 1
                      if (mouth == 0) { //no current
                        if (boolDoItHave(10) == true) {
                          //add one
                          mouth += 1;continue;
                        } //end if
                      } //end if
                      else if (mouth > 0) { //current
                        if (boolDoItHave(1) == true) {
                          //add one
                          mouth +=1;continue;
                        } //end if
                      }

                      //tail 10, 15
                      if (tail == 0) { //no current
                        if (boolDoItHave(10) == true) {
                          //add one
                          tail += 1;continue;
                        } //end if
                      } //end if
                      else if (tail > 0) { //current
                        if (boolDoItHave(15) == true) {
                          //add one
                          tail +=1;continue;
                        } //end if
                      }

                      //marking 10
                      else if (boolDoItHave(10) == true) {
                        //add one
                        marking += 1;continue;
                      } //end if

                      //ear 20, 5
                      if (ear == 0) { //no current
                        if (boolDoItHave(20) == true) {
                          //add one
                          ear += 1;continue;
                        } //end if
                      } //end if
                      else if (ear > 0) { //current
                        if (boolDoItHave(5) == true) {
                          //add one
                          ear +=1;continue;
                        } //end if
                      }

                      //nose 10, 1
                      if (nose == 0) { //no current
                        if (boolDoItHave(10) == true) {
                          //add one
                          nose += 1;continue;
                        } //end if
                      } //end if
                      else if (nose > 0) { //current
                        if (boolDoItHave(1) == true) {
                          //add one
                          nose +=1;continue;
                        } //end if
                      }

                      //fur 15, 5
                      if (fur == 0) { //no current
                        if (boolDoItHave(15) == true) {
                          //add one
                          fur += 1;continue;
                        } //end if
                      } //end if
                      else if (fur > 0) { //current
                        if (boolDoItHave(5) == true) {
                          //add one
                          fur +=1;continue;
                        } //end if
                      }

                      //plantgrowth 10
                      if (boolDoItHave(10) == true) {
                        //add one
                        plantgrowth +=1;continue;
                      } //end if

                      //hair 10
                      if (boolDoItHave(10) == true) {
                        //add one
                        hair +=1;continue;
                      } //end if

                      //tongue 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        tongue +=1;continue;
                      } //end if

                      //extraeyes 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        extraeyes +=1;continue;
                      } //end if

                      //wing 15, 5
                      if (wing == 0) { //no current
                        if (boolDoItHave(15) == true) {
                          //add one
                          wing += 1;continue;
                        } //end if
                      } //end if
                      else if (wing > 0) { //current
                        if (boolDoItHave(5) == true) {
                          //add one
                          wing +=1;continue;
                        } //end if
                      }

                      //teeth 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        teeth +=1;continue;
                      } //end if

                      //scale 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        scale +=1;continue;
                      } //end if

                      //feather 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        feather +=1;continue;
                      } //end if

                      //sizechange 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        sizechange +=1;continue;
                      } //end if

                      //gradient 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        gradient +=1;continue;
                      } //end if

                      //flesh 10
                      if (boolDoItHave(10) == true) {
                        //add one
                        flesh +=1;continue;
                      } //end if

                      //fin 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        fin +=1;continue;
                      } //end if

                      //horn 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        horn +=1;continue;
                      } //end if

                      //gemgrowths 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        gemgrowth +=1;continue;
                      } //end if

                      //foot 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        foot +=1;continue;
                      } //end if

                      //neck 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        neck +=1;continue;
                      } //end if

                      //blood 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        blood +=1;continue;
                      } //end if

                      //frill 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        frill +=1;continue;
                      } //end if

                      //expression 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        expression +=1;continue;
                      } //end if

                      //removal 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        removal +=1;continue;
                      } //end if

                      //whisker 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        whisker +=1;continue;
                      } //end if

                      //antennae 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        antennae +=1;continue;
                      } //end if

                      //shell 5
                      if (boolDoItHave(5) == true) {
                        //add one
                        shell +=1;continue;
                      } //end if

                      //other
                        other +=1;
                    }

                    let blobvoucherstring = '\n';

                    if (arm == 1){
                      blobvoucherstring = blobvoucherstring + arm + ' Arm Voucher \n';
                    }
                    else if (arm > 1){
                      blobvoucherstring = blobvoucherstring + arm + ' Arm Vouchers \n';
                    }

                    if (ear == 1){
                      blobvoucherstring = blobvoucherstring + ear + ' Ear Voucher \n';
                    }
                    else if (ear > 1){
                      blobvoucherstring = blobvoucherstring + ear + ' Ear Vouchers \n';
                    }

                    if (eye == 1){
                      blobvoucherstring = blobvoucherstring + eye + ' Eye Voucher \n';
                    }
                    else if (eye > 1){
                      blobvoucherstring = blobvoucherstring + eye + ' Eye Vouchers \n';
                    }

                    if (foot == 1){
                      blobvoucherstring = blobvoucherstring + foot + ' Foot Voucher \n';
                    }
                    else if (foot > 1){
                      blobvoucherstring = blobvoucherstring + foot + ' Foot Vouchers \n';
                    }

                    if (hair == 1){
                      blobvoucherstring = blobvoucherstring + hair + ' Hair Voucher \n';
                    }
                    else if (hair > 1){
                      blobvoucherstring = blobvoucherstring + hair + ' Hair Vouchers \n';
                    }

                    if (head == 1){
                      blobvoucherstring = blobvoucherstring + head + ' Head Voucher \n';
                    }
                    else if (head > 1){
                      blobvoucherstring = blobvoucherstring + head + ' Head Vouchers \n';
                    }

                    if (leg == 1){
                      blobvoucherstring = blobvoucherstring + leg + ' Leg Voucher \n';
                    }
                    else if (leg > 1){
                      blobvoucherstring = blobvoucherstring + leg + ' Leg Vouchers \n';
                    }

                    if (mouth == 1){
                      blobvoucherstring = blobvoucherstring + mouth + ' Mouth Voucher \n';
                    }
                    else if (mouth > 1){
                      blobvoucherstring = blobvoucherstring + mouth + ' Mouth Vouchers \n';
                    }

                    if (neck == 1){
                      blobvoucherstring = blobvoucherstring + neck + ' Neck Voucher \n';
                    }
                    else if (neck > 1){
                      blobvoucherstring = blobvoucherstring + neck + ' Neck Vouchers \n';
                    }

                    if (nose == 1){
                      blobvoucherstring = blobvoucherstring + nose + ' Nose Voucher \n';
                    }
                    else if (nose > 1){
                      blobvoucherstring = blobvoucherstring + nose + ' Nose Vouchers \n';
                    }

                    if (tail == 1){
                      blobvoucherstring = blobvoucherstring + tail + ' Tail Voucher \n';
                    }
                    else if (tail > 1){
                      blobvoucherstring = blobvoucherstring + tail + ' Tail Vouchers \n';
                    }

                    if (tongue == 1){
                      blobvoucherstring = blobvoucherstring + tongue + ' Tongue Voucher \n';
                    }
                    else if (tongue > 1){
                      blobvoucherstring = blobvoucherstring + tongue + ' Tongue Vouchers \n';
                    }

                    if (whisker == 1){
                      blobvoucherstring = blobvoucherstring + whisker + ' Whisker Voucher \n';
                    }
                    else if (whisker > 1){
                      blobvoucherstring = blobvoucherstring + whisker + ' Whisker Vouchers \n';
                    }

                    if (teeth == 1){
                      blobvoucherstring = blobvoucherstring + teeth + ' Teeth Voucher \n';
                    }
                    else if (teeth > 1){
                      blobvoucherstring = blobvoucherstring + teeth + ' Teeth Vouchers \n';
                    }

                    if (expression == 1){
                      blobvoucherstring = blobvoucherstring + expression + ' Expression Voucher \n';
                    }
                    else if (expression > 1){
                      blobvoucherstring = blobvoucherstring + expression + ' Expression Vouchers \n';
                    }

                    if (feather == 1){
                      blobvoucherstring = blobvoucherstring + feather + ' Feather Voucher \n';
                    }
                    else if (feather > 1){
                      blobvoucherstring = blobvoucherstring + feather + ' Feather Vouchers \n';
                    }

                    if (fur == 1){
                      blobvoucherstring = blobvoucherstring + fur + ' Fur Voucher \n';
                    }
                    else if (fur > 1){
                      blobvoucherstring = blobvoucherstring + fur + ' Fur Vouchers \n';
                    }

                    if (scale == 1){
                      blobvoucherstring = blobvoucherstring + scale + ' Scale Voucher \n';
                    }
                    else if (scale > 1){
                      blobvoucherstring = blobvoucherstring + scale + ' Scale Vouchers \n';
                    }

                    if (shapechange == 1){
                      blobvoucherstring = blobvoucherstring + shapechange + ' Shapechange Voucher \n';
                    }
                    else if (shapechange > 1){
                      blobvoucherstring = blobvoucherstring + shapechange + ' Shapechange Vouchers \n';
                    }

                    if (sizechange == 1){
                      blobvoucherstring = blobvoucherstring + sizechange + ' Sizechange Voucher \n';
                    }
                    else if (sizechange > 1){
                      blobvoucherstring = blobvoucherstring + sizechange + ' Sizechange Vouchers \n';
                    }

                    if (marking == 1){
                      blobvoucherstring = blobvoucherstring + marking + ' Marking Voucher \n';
                    }
                    else if (marking > 1){
                      blobvoucherstring = blobvoucherstring + marking + ' Marking Vouchers \n';
                    }

                    if (gradient == 1){
                      blobvoucherstring = blobvoucherstring + gradient + ' Gradient Voucher \n';
                    }
                    else if (gradient > 1){
                      blobvoucherstring = blobvoucherstring + gradient + ' Gradient Vouchers \n';
                    }

                    if (blood == 1){
                      blobvoucherstring = blobvoucherstring + blood + ' Blood Voucher \n';
                    }
                    else if (blood > 1){
                      blobvoucherstring = blobvoucherstring + blood + ' Blood Vouchers \n';
                    }

                    if (removal == 1){
                      blobvoucherstring = blobvoucherstring + removal + ' Removal Voucher \n';
                    }
                    else if (removal > 1){
                      blobvoucherstring = blobvoucherstring + removal + ' Removal Vouchers \n';
                    }

                    if (flesh == 1){
                      blobvoucherstring = blobvoucherstring + flesh + ' Flesh Voucher \n';
                    }
                    else if (flesh > 1){
                      blobvoucherstring = blobvoucherstring + flesh + ' Flesh Vouchers \n';
                    }

                    if (antennae == 1){
                      blobvoucherstring = blobvoucherstring + antennae + ' Antennae Voucher \n';
                    }
                    else if (antennae > 1){
                      blobvoucherstring = blobvoucherstring + antennae + ' Antennae Vouchers \n';
                    }

                    if (extraeyes == 1){
                      blobvoucherstring = blobvoucherstring + extraeyes + ' Extraeyes Voucher \n';
                    }
                    else if (extraeyes > 1){
                      blobvoucherstring = blobvoucherstring + extraeyes + ' Extraeyes Vouchers \n';
                    }

                    if (fin == 1){
                      blobvoucherstring = blobvoucherstring + fin + ' Fin Voucher \n';
                    }
                    else if (fin > 1){
                      blobvoucherstring = blobvoucherstring + fin + ' Fin Vouchers \n';
                    }

                    if (frill == 1){
                      blobvoucherstring = blobvoucherstring + frill + ' Frill Voucher \n';
                    }
                    else if (frill > 1){
                      blobvoucherstring = blobvoucherstring + frill + ' Frill Vouchers \n';
                    }

                    if (horn == 1){
                      blobvoucherstring = blobvoucherstring + horn + ' Horn Voucher \n';
                    }
                    else if (horn > 1){
                      blobvoucherstring = blobvoucherstring + horn + ' Horn Vouchers \n';
                    }

                    if (gemgrowth == 1){
                      blobvoucherstring = blobvoucherstring + gemgrowth + ' Gemgrowth Voucher \n';
                    }
                    else if (gemgrowth > 1){
                      blobvoucherstring = blobvoucherstring + gemgrowth + ' Gemgrowth Vouchers \n';
                    }

                    if (plantgrowth == 1){
                      blobvoucherstring = blobvoucherstring + plantgrowth + ' Plantgrowth Voucher \n';
                    }
                    else if (plantgrowth > 1){
                      blobvoucherstring = blobvoucherstring + plantgrowth + ' Plantgrowth Vouchers \n';
                    }

                    if (colorchange == 1){
                      blobvoucherstring = blobvoucherstring + colorchange + ' Colorchange Voucher \n';
                    }
                    else if (colorchange > 1){
                      blobvoucherstring = blobvoucherstring + colorchange + ' Colorchange Vouchers \n';
                    }

                    if (shell == 1){
                      blobvoucherstring = blobvoucherstring + shell + ' Shell Voucher \n';
                    }
                    else if (shell > 1){
                      blobvoucherstring = blobvoucherstring + shell + ' Shell Vouchers \n';
                    }

                    if (wing == 1){
                      blobvoucherstring = blobvoucherstring + wing + ' Wing Voucher \n';
                    }
                    else if (wing > 1){
                      blobvoucherstring = blobvoucherstring + wing + ' Wing Vouchers \n';
                    }

                    if (other == 1){
                      blobvoucherstring = blobvoucherstring + other + ' Other Voucher \n';
                    }
                    else if (other > 1){
                      blobvoucherstring = blobvoucherstring + other + ' Other Vouchers \n';
                    }

                    message.reply(blobvoucherstring);


                    function randommut(){
                      const mutatelist = ( "plumber,industrialisation,proponent,wish,pulley,tart,bottling,lot,smoke,weather,market,vixen,icicle,guilty,dramaturge,racism,memory,moron,caravan,hobbit,makeup,babushka,delight,styling,team,marten,father,chart,home,bureau,shower,tennis,circumstance,pressurisation,leek,gaffer,chamber,closet,squash,turn,pail,consonant,coaster,marsh,swell,planet,crayon,editor,enrollment,right,laparoscope,scheduling,die,curriculum,cloak,harm,communication,equality,simplification,sprout,suitcase,siding,crotch,relative,tie,pepperoni,descent,dresser,notion,ambassador,confidence,heart-throb,poverty,thirst,basis,intention,tom-tom,arm,solution,silence,roar,cartload,median,smelting,obi,decoder,summer,outrigger,hake,stand,sunrise,procedure,husband,pathway,wisteria,filth,pantyhose,emergence,allocation,infancy,will,listing,alder,probability,completion,initialise,scripture,cosset,holiday,eyrie,execution,tramp,inflammation,casualty,whelp,song,shoelace,teenager,trunk,rubric,tortilla,furry,article,dinghy,eyeball,dwarf,carving,god,observatory,bumper,mini,arm-rest,practice,urge,dragonfly,butterfly,bell,spectacles,fear,acupuncture,patch,guarantee,mozzarella,read,hormone,dud,sphere,highlight,chrome,desktop,keystone,glutamate,craw,genius,soybean,spectrum,propane,stylus,lip,error,construction,assistance,boxer,cravat,strife,chord,van,lanai,plastic,oxygen,terminology,offset,snake,normalization,repository,temptation,ascot,venti,trowel,swimming,afterthought,salute,coke,limb,eleventh,praise,algorithm,rocket-ship,giraffe,overexertion,terrorism,app,glee,heartbeat,widow,ark,pudding,cold,insectarium,appetite,bloom,purpose,shelf,housework,show-stopper,diagnosis,beauty,unblinking,drain,epee,snowflake,city,ranch,hive,ownership,marker,designer,immortal,damselfly,flash,fatigue,threat,slavery,rooster,detention,treaty,last,blend,forum,webmail,brownie,concrete,trainer,installation,drum,sheet,testimonial,beanie,clam,perfume,contagion,exaggeration,retrospectivity,plume,havoc,driving,gaming,alloy,use,loaf,campus,neighborhood,fig,commission,somebody,tear,gallon,cup,pastry,insect,meet,science,console,neighbor,donor,belligerency,ikebana,keyboard,sticker,branch,snake,plant,bun,diploma,toaster,books,producer,underpass,lemonade,improvement,kitty,ease,domination,numeracy,churn,grapefruit,area,interior,lawn,brunch,cape,cutlet,conversion,cradle,luncheonette,thanks,injunction,cheddar,belly,maintenance,device,heaven,pot,candidate,evening,savannah,claw,rumor,fiery,trombone,journey,infant,casserole,tamale,representation,jade,craft,lay,attendance,chairlift,fry,tax,hybridization,policeman,gazelle,ironclad,tabernacle,calendar,ruffle,axis,fax,protocol,snowsuit,pier,zucchini,sum,wrapper,beet,volcano,federation,disaster,mouse,turnover,burden,nymph,usual,prune,accordion,tankful,catch,flour,scorn,clay,vitamin,vise,vista,fedora,milepost,arch-rival,time,seal,cheesecake,borrowing,disk,trapdoor,plight,avocado,monocle,acrylic,leaf,frown,hornet,spacing,help,liner,stallion,skeleton,adapter,wifi,bead,variable,solidity,tomatillo,dissonance,block,fabric,fraction,marines,lung,dozen,infarction,trend,parenthesis,cross-stitch,cleric,sun,hike,doll,dynamite,rug,mineral,castle,sundae,blackfish,continuity,dearest,layer,ex-husband,feature,deposit,shoehorn,diarist,climb,hearsay,ferryboat,understatement,sneakers,entree,partner,embassy,carnation,denim,confidence,solution,compulsion,dining,trainer,happening,chive,loaf,gel,birdcage,minimalism,obsession,trigonometry,vanadyl,wisteria,publisher,lemonade,guilty,mastication,raven,style,meatball,sitar,fanlight,paintwork,action,hound,draw,mortgage,inheritance,dishwasher,scripture,donor,pirate,peanut,carol,chemistry,certificate,flash,suite,recapitulation,highlight,shackle,reluctance,camel,wiring,shutdown,unblinking,clarity,hacksaw,floozie,lounge,lyrics,lysine,roadway,exhibition,skull,duffel,cemetery,pike,copywriter,flow,repair,lanai,kohlrabi,exocrine,melon,thigh,spot,lock,cub,patty,blade,flare,coleslaw,click,reconsideration,species,beech,graffiti,haze,briefs,donkey,ecosystem,steeple,TV,worry,ramie,tuber,meet,bookcase,nail,refrigerator,spork,colony,great-grandfather,membrane,diabetes,belt,stupidity,operating,baseboard,abacus,independent,lobotomy,skyline,history,slope,catacomb,polenta,convenience,guerrilla,grandchild,celebration,kitsch,digging,bikini,goat,baseline,kitchen,cephalopod,vivo,angiosperm,sorrel,embryo,chairperson,decongestant,gold,pupil,possible,ounce,score,puzzle,surfboard,technique,academics,prejudice,bran,gear,marimba,cylinder,visit,deficit,infix,hydraulics,plum,cocktail,decoration,jumpsuit,youngster,alpenglow,retailer,channel,disdain,obesity,maintenance,jot,helo,revenue,athletics,creditor,funding,loss,subscription,flat,puma,facet,constraint,clam,physics,hydrofoil,downtown,sweatshirt,drink,breastplate,weed,read,enzyme,messy,loophole,settlement,cinnamon,elite,invader,kangaroo,fish,circumstance,goodness,liquid,ethics,variation,liar,nun,bacon,dimple,thrill,fun,win,effort,manacle,effectiveness,tendency,sweatsuit,thermometer,waterfall,pharmacopoeia,premier,giggle,debate,browser,sledge,settler,opportunity,copper,load,aide,library,lending,basin,naturalisation,essence,shadowbox,restroom,lap,aftershock,couch,junket,churn,sousaphone,following,noodle,paranoia,luggage,infant,harmony,fibrosis,tablet,surgeon,coverage,second,real,employment,culvert,patina,sprinkles,heritage,cousin,booklet,weedkiller,publication,frenzy,complicity,reciprocity,pepperoni,answer,excursion,miscarriage,route,nit,hunter,diploma,lining,skeleton,brain,tenement,solidity,cooperation,legging,box,purse,dividend,brow,concentration,mare,uniformity,honor,double,townhouse,appetizer,socialism,molecule,jasmine,revenant,fruit,afternoon,wren,movie,understanding,accomplishment,minnow,tongue,limit,mini-skirt,median,shoot,storey,sight,priesthood,interface,pear,vascular,madam,wood,aglet,collateral,leopard,kiss,typewriter,credential,farming,recall,seeker,chess,lung,biopsy,bandwidth,canal,flag,convention,stallion,habitat,absence,learning,locality,incarnation,whack,visitor,tote,pursuit,souvenir,property,mall,diagram,giant,battalion,helicopter,paint,high-rise,edge,widget,tick,frame,margarine,demon,moonscape,hiring,incompetence,safeguard,elderberry,equivalent,pastry,fourths,timpani,roof,anesthesiology,heyday,hedgehog,daybed,frosting,hole,billboard,pilgrimage,creme brulee,fahrenheit,faculty,fiberglass,keep,buffer,temper,legislature,swanling,schedule,spray,present,sparerib,astronomy,enforcement,statistics, bake,frown,immortal,innervation,bet,hedge,rag,cyclamen,mule,premium,marble,baggie,initialise,patience,supplier,euphonium,experimentation,desert,brow,usher,romaine,lyre,oval,peach,nymph,reconsideration,fav,fatigue,spelt,brassiere,legal,preservation,current,controller,trillion,fanlight,linkage,brick,idiom,ark,flugelhorn,triad,carnation,satisfaction,malice,gyro,podcast,instructor,maracas,miter,violet,crazy,jumpsuit,discipline,guacamole,lightscreen,attorney,heel,squirrel,beverage,hearing,travel,dune buggy,eyebrow,statin,incense,honor,macaroon,laugh,vehicle,mastoid,cord,consumer,chasuble,surroundings,feed,iron,waiver,bureau,basketball,cutlet,yoyo,billing,rage,blazer,journal,brass,consist,wing,pedal,latitude,diarist,creche,beak,anime,sorrow,grandfather,second,ligand,step-mother,plough,muscle,snowflake,rifle,prospect,overload,mood,straw,facility,rumor,conviction,subscription,nanoparticle,steam,harmonise,stock,reality,pusher,randomization,ability,cockroach,ore,albatross,leash,deep,season,solitaire,sarong,foal,take-out,almighty,fava,pound,fact,disregard,raspberry,boyhood,adulthood,delivery,halibut,prow,spy,dealing,banner,conception,advocate,ascot,angel,depot,valuable,robot,spear,minimum,liquor,reliability,gram,wont,cast,strategy,lip,deformation,brood,decoration,childbirth,spacing,plumber,decade,bill,cayenne,speakerphone,confirmation,inconvenience,negotiation,balaclava,intuition,folklore,dialect,riot,vision,downforce,expression,venom,bricklaying,catacomb,shofar,bootie,risk,sensibility,spool,boss,jelly,teammate,crewmen,revival,try,mantua,mining,conga,paste,mime,danger,layout,sale,trick,tug,garbage,music-making,graft,father,description,recess,attempt,kitsch,hockey,sample,sadness,graduation,rocket-ship,infix,simple,beet,likelihood,supermarket,perpendicular,ice,geology,celsius,reject,overflight,chill,beach,succotash,footnote,wine,erection,min,pantology,bird-watcher,teapot,left,comic,education,thongs,dreamer,integer,wrist,enforcement,linseed,passive,jazz,recipient,being,node,class,ink,meridian,dickey,icing,parrot,yard,fowl,angina,eddy,patentee,figurine,loop,neuropsychiatry,lye,disposer,bias,yak,alien,eyelash,photograph,modernist,hydrolysis,verdict,epithelium,security,lawmaker,peacock,clipper,overheard,cube,whorl,finish,material,weed,eligibility,chick,functionality,ideal,buzzard,pursuit,bestseller,ascent,general,pump,pulse,pottery,shark,circulation,caterpillar,brushfire,synthesis,jungle,exhaustion,spite,ruckus,diamond,path,tofu,miracle,lace,lawyer,milepost,jockey,trophy,suet,opera,restructuring,autumn,lift,briefing,camp,foreigner,armoire,oatmeal,atmosphere,playroom,brother-in-law,reaction,epoxy,stand,cormorant,bumper,burning,colonization,interferometer,gaiters,genie,ladder,gnat,jeweller,checkbook,founding,full,resale,salt,furnace,patina,array,treaty,completion,progression,guy,rape,souvenir,carpeting,platypus,fund,import,doorbell,honeydew,proponent,velocity,prophet,coach,bus,frontier,dromedary,colleague,safeguard,puzzle,efficacy,forehead,criticism,center,antigen,something,orangutan,deposit,crush,counseling,checking,icy,landmine,ectodermal,calculus,avocado,aim,engineering,route,rectangle,diagram,deviance,bullet,mozzarella,locker,wraparound, swimming,admire,captor,intervention,zither,irrigation,vestment,major-league,tuition,policy,horde,foreigner,leader,hint,cock,ape,gain,battery,protection,prize,fratricide,inbox,genie,boundary,site,horseradish,welfare,marshland,terminal,chicory,fit,cop-out,pepperoni,half-brother,inn,ferry,horizon,verve,satellite,manager,dandelion,zero,bedrock,phase,mortality,stance,misogyny,truck,encounter,odometer,gnat,pathway,spokesman,blocker,kit,jump,lid,prostacyclin,chaise,wiring,introduction,biology,realm,acceptance,instance,whirlpool,wording,methane,rheumatism,mortal,punctuation,sausage,widget,canon,compliance,south,mukluk,kick-off,milepost,sunrise,subcontractor,sail,universe,ease,pedal,tenement,hall,coincidence,guacamole,fascia,automaton,extremist,inhibition,deodorant,designation,iceberg,boss,fact,pacemaker,laundry,hive,answer,dart,grouse,baboon,heron,agenda,understanding,wish,albatross,cirrhosis,battleship,tube,native,frame,set,disruption,optimal,love,canvas,step-uncle,pompom,watcher,biscuit,suspension,decoder,gemsbok,law,snob,doubter,espalier,cartilage,attendance,zoot-suit,trick,shearling,rum,exaggeration,macro,displacement,loaf,pocket,scow,tracking,rhinoceros,progress,departure,lamb,co-producer,cash,teen,ovary,paperback,mouth,deficit,sleepiness,void,relief,jodhpurs,timbale,corsage,portfolio,physical,vein,licensing,profile,intestine,show-stopper,rowing,trafficker,peasant,draw,tradition,embryo,roundabout,courtroom,marxism,relative,town,cave,charset,jaguar,quartz,daily,homogenate,eviction,buckle,oat,fool,exclamation,workplace,increase,plowman,calf,short,rubbish,fright,falling-out,corps,luncheonette,sorbet,dilution,lie,north,airspace,mansion,liberty,liquidity,atheist,airplane,carotene,cornet,hermit,whelp,hazelnut,exile,insectarium,anguish,memo,society,cummerbund,tutu,cheetah,naming,disease,bear,receiver,area,dumbwaiter,purchase,schedule,plastic,quiver,discrimination,mandate,mime,determination,tomorrow,credenza,anise,congressman,crab,hose,glee,footage,corporation,seat,paramecium,waist,implication,house,strobe,vendor,proposal,bud,trapezoid,wildebeest,cane,spray,brook,mozzarella,domain,shrimp,lining,littleneck,paranoia,fledgling,meadow,refectory,tonight,inauguration,father-in-law,stopwatch,waiver,discourse,prostrate,heir,story,brunch,casserole,miss,preparation,monopoly,unblinking,bank,gratitude,venti,diaphragm,cross-stitch,gem,zoologist,immigration,duck,emotion,objective,miter,standing,daylight,simple,cloth,tuber,millstone,desk,currency,excuse,proponent,certainty,thirst,muffin,bedroom,bark,mistake,meatball,fly,hand,motorcycle,bassoon,estuary,read,detainment,motion,ripple,kielbasa,millimeter,border,cenotaph,shoehorn,developmental,nitrogen,airman,dragon,enclave,slider,bread,invader,espadrille,video,noise,mood,resemblance,foundation,rocket,ladder,omnivore,nose,spill,arena,foam,chopsticks,eyelashes,anticodon,quantity,relation,devastation,awe,bootee,motorcar,lettuce,ship,pigpen,tailbud,curry,julienne,candelabra,mover,avocado,hallway,lust,caper,winter,investment,installation,front,chronograph,sequel,cinder,male,upward,reunion,caution,gang,vanilla,dew,resistance,camera,melatonin,allergist,powder,jeep,differential,snuck,overcharge,sorghum,carbon,spec,turmeric,regulation,pronoun,bracelet,woolens" );

                      mutlistsplit = mutatelist.split(',');

                      var random = (Math.floor(Math.random(1) * (mutlistsplit.length)));

                      return mutlistsplit[random];
                    }

                    function randomcolor(){
                      const colorlist = ( "alice blue,antique white,aqua,aquamarine,azure,beige,bisque,black,blanched-almond blue,blue-violet,brown burlywood,cadet blue,chartreuse,chocoate,coral,cornflower blue,cornsilk,crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkkhaki,darkmagenta,darkolivegreen,darkorange,darkorchid,darkred,dark salmon,dark seagreen,dark slateblue,darkslategray,dark turquoise,dark violet,deeppink,deep sky-blue,dimgray,dodger blue,fire brick,floralwhite,forest green,fuchsia,gainsboro,ghost white,gold,goldenrod,gray,green,green-yellow,honeydew,hot pink,indianred,indigo,ivory khaki,lavender,lavender blush,lawn green,lemon chiffon,lightblu,lightcoral,lightcyan,light goldenrod yellow,light green,light grey,light pink,light salmon,lightseagreen,lightskyblue,light slate-grey,light steel-blue,light yellow-lime,lime green,linen,magenta,maroon,medium aquamarine,medium blue,medium orchid,medium purple,medium seagreen,medium slateblue,medium springgreen,medium turquoise,medium violet-red,midnight blue,mint cream,misty rose,moccasin,navajo white,navy,old lace,olive,olive drab,orange,orange-red,orchid,palegoldenrod,palegreen,pale violet red,papayawhip,peachpuff,peru,pink,plum,powder blue,purple,red,rosy brown,royal blue,saddle brown,salmon,sandy brown,sea green,seashell,sienna,silver,skyblue,slate blue,slate gray,snow,spring green,steel blue,tan,teal,thistle,tomato,turquoise,violet,wheat,white,white smoke,yellow,yellow-green" );
                      colorlistsplit = colorlist.split(',');

                      var random = (Math.floor(Math.random(1) * (colorlistsplit.length)));

                      return colorlistsplit[random];
                    }


                    var voucherlist = '';
                    if (arm >= 1){
                      voucherlist = voucherlist + "arm,";
                    }
                    if (ear >= 1){
                      voucherlist = voucherlist + "ear,";
                    }
                    if (eye >= 1){
                      voucherlist = voucherlist + "eye,";
                    }
                    if (foot >= 1){
                      voucherlist = voucherlist + "foot,";
                    }
                    if (hair >= 1){
                      voucherlist = voucherlist + "hair,";
                    }
                    if (mouth >= 1){
                      voucherlist = voucherlist + "mouth,";
                    }
                    if (neck >= 1){
                      voucherlist = voucherlist + "neck,";
                    }
                    if (nose >= 1){
                      voucherlist = voucherlist + "nose,";
                    }
                    if (tail >= 1){
                      voucherlist = voucherlist + "tail,";
                    }
                    if (tongue >= 1){
                      voucherlist = voucherlist + "tongue,";
                    }
                    if (whisker >= 1){
                      voucherlist = voucherlist + "whisker,";
                    }
                    if (teeth >= 1){
                      voucherlist = voucherlist + "teeth,";
                    }
                    if (feather >= 1){
                      voucherlist = voucherlist + "feather,";
                    }
                    if (fur >= 1){
                      voucherlist = voucherlist + "fur,";
                    }
                    if (scale >= 1){
                      voucherlist = voucherlist + "scale,";
                    }
                    if (flesh >= 1){
                      voucherlist = voucherlist + "flesh,";
                    }
                    if (antennae >= 1){
                      voucherlist = voucherlist + "antennae,";
                    }
                    if (extraeyes >= 1){
                      voucherlist = voucherlist + "extraeyes,";
                    }
                    if (fin >= 1){
                      voucherlist = voucherlist + "fin,";
                    }
                    if (frill >= 1){
                      voucherlist = voucherlist + "frill,";
                    }
                    if (horn >= 1){
                      voucherlist = voucherlist + "horn,";
                    }
                    if (gemgrowth >= 1){
                      voucherlist = voucherlist + "gemgrowth,";
                    }
                    if (plantgrowth >= 1){
                      voucherlist = voucherlist + "plantgrowth,";
                    }

                    var partlist = 'body,';
                    if (arm >= 1){
                      partlist = partlist + "arm,";
                    }
                    if (foot >= 1){
                      partlist = partlist + "foot,";
                    }
                    if (leg >= 1){
                      partlist = partlist + "leg,";
                    }
                    if (head >= 1){
                      partlist = partlist + "head,";
                    }
                    if (tail >= 1){
                      partlist = partlist + "tail,";
                    }
                    if (shell >= 1){
                      partlist = partlist + "shell,";
                    }
                    if (wing >= 1){
                      partlist = partlist + "wing,";
                    }

                    function randomvoucher(voucherlist){
                      vouchersplit = voucherlist.trim().split(',');

                      var random = (Math.floor(Math.random(1) * (vouchersplit.length)));
                      return vouchersplit[random];
                    }

                    function randombodypart(partlist){
                      partsplit = partlist.split(',');

                      var random = (Math.floor(Math.random(1) * (partsplit.length)));
                      return partsplit[random];
                    }

                    function randomgod(){
                      const godlist = ( "Eris,Ichor,Themis" );
                      godlistsplit = godlist.split(',');

                      var random = (Math.floor(Math.random(1) * (godlistsplit.length)));

                      return godlistsplit[random];
                    }

                    function randomblobling(){
                      const bloblist = ( "Eris,Ichor,Themis,B,Damazi,Kip,Evrah,Ifera,Eyetiddies,Greenie,Assa,Vermin,Sakana,Lerinzia,Yume,Reinala,Dioscuri,Terrim,The Librarian,Daren,Parabellum,Tyr'i,Soma,Breshcandra,Wigglesworth,Ghost" );
                      bloblistsplit = bloblist.split(',');

                      var random = (Math.floor(Math.random(1) * (bloblistsplit.length)));

                      return bloblistsplit[random];
                    }


                    let specialfill = false;
                    let special = '';
                    let specialprob = (Math.floor(Math.random(1) * 7));

                    if (specialprob == 0){
                      var ran1 = randomvoucher(voucherlist)
                      var ran2 = randombodypart(partlist)
                      if (ran1 && ran2){
                        special = 'This blob has a ' + ran1 + ' growing out of its ' + ran2 + '.';
                        specialfill = true;
                      }
                    }
                    else if (specialprob == 1){
                      var ran1 = randomvoucher(voucherlist)
                      var ran2 = randommut()
                      if (ran1 && ran2){
                        special = "This blob's " + ran1 + ' is vaguely reminiscent of ' + ran2 + '.';
                        specialfill = true;
                      }
                    }
                    else if (specialprob == 2){
                      var ran1 = randomcolor()
                      if (ran1){
                        special = 'Find a way to mix ' + ran1 + " into this blob's design.";
                        specialfill = true;
                      }
                    }
                    else if (specialprob == 3){
                      var ran1 = randomvoucher(voucherlist)
                      if (ran1){
                        special = 'This blob has a very unique ' + ran1 + '.';
                        specialfill = true;
                      }
                    }
                    else if (specialprob == 4){
                      var god = randomgod();
                      var random = (Math.floor(Math.random(1) * 3));
                      var alignment;
                      if (god == "Eris"){
                          if (random == 0){
                            alignment = "chaotic good"
                          }
                          else if (random == 1){
                            alignment = "chaotic neutral"
                          }
                          else if (random == 2){
                            alignment = "chaotic evil"
                          }
                      }
                      if (god == "Themis"){
                          if (random == 0){
                            alignment = "lawful good"
                          }
                          else if (random == 1){
                            alignment = "lawful neutral"
                          }
                          else if (random == 2){
                            alignment = "lawful evil"
                          }
                      }
                      if (god == "Ichor"){
                          if (random == 0){
                            alignment = "neutral good"
                          }
                          else if (random == 1){
                            alignment = "true neutral"
                          }
                          else if (random == 2){
                            alignment = "neutral evil"
                          }
                      }
                      special = 'This blob is probably ' + alignment + '. Hail ' + god + '!';
                      specialfill = true;
                    }
                    else if (specialprob == 5){
                      var ran1 = randomblobling();
                      if (ran1){
                        special = 'This blob would probably hate ' + ran1 + '.';
                        specialfill = true;
                      }
                    }
                    else if (specialprob == 6){
                      var ran1 = randomblobling();
                      if (ran1){
                        special = 'This blob would probably love ' + ran1 + '.';
                        specialfill = true;
                      }
                    }





                    if (specialfill){
                      message.channel.send("**special requests:** \n" + special);
                    }

                  }

                }).catch(() => {
                message.reply('somethin went wrong,, oops');
              });



            }).catch(() => {
            message.reply('faster pls');
          });
        })
    }
