import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const RankingsPageOne = React.lazy(() => import("pages/RankingsPageOne"));
const Termsofservicepage = React.lazy(() => import("pages/Termsofservicepage"));
const NFTGamepage = React.lazy(() => import("pages/NFTGamepage"));
const Createpage = React.lazy(() => import("pages/Createpage"));
const BlogPage = React.lazy(() => import("pages/BlogPage"));
const HelpCenterPage = React.lazy(() => import("pages/HelpCenterPage"));
const OfflinePage = React.lazy(() => import("pages/OfflinePage"));
const DocumentPage = React.lazy(() => import("pages/DocumentPage"));
const FashionPage = React.lazy(() => import("pages/FashionPage"));
const UtilityPage = React.lazy(() => import("pages/UtilityPage"));
const TendingCardsPage = React.lazy(() => import("pages/TendingCardsPage"));
const SportsPage = React.lazy(() => import("pages/SportsPage"));
const VirtualWorldPage = React.lazy(() => import("pages/VirtualWorldPage"));
const PhotographyPage = React.lazy(() => import("pages/PhotographyPage"));
const MusicPage = React.lazy(() => import("pages/MusicPage"));
const DomainPage = React.lazy(() => import("pages/DomainPage"));
const CollectiblesPage = React.lazy(() => import("pages/CollectiblesPage"));
const ArtPage = React.lazy(() => import("pages/ArtPage"));
const AllNFTsPage = React.lazy(() => import("pages/AllNFTsPage"));
const ProjectAnalyticsPageOne = React.lazy(() =>
  import("pages/ProjectAnalyticsPageOne"),
);
const ProjectAnalyticsPage = React.lazy(() =>
  import("pages/ProjectAnalyticsPage"),
);
const ProjectOffersPage = React.lazy(() => import("pages/ProjectOffersPage"));
const Walletpage = React.lazy(() => import("pages/Walletpage"));
const Mysavelistspage = React.lazy(() => import("pages/Mysavelistspage"));
const MyCartpage = React.lazy(() => import("pages/MyCartpage"));
const Aboutpage = React.lazy(() => import("pages/Aboutpage"));
const Userpage = React.lazy(() => import("pages/Userpage"));
const ExplorColloctionpage = React.lazy(() =>
  import("pages/ExplorColloctionpage"),
);
const CaseStudiesDetailspage = React.lazy(() =>
  import("pages/CaseStudiesDetailspage"),
);
const CaseStudiespage = React.lazy(() => import("pages/CaseStudiespage"));
const Careerspage = React.lazy(() => import("pages/Careerspage"));
const ContactPage = React.lazy(() => import("pages/ContactPage"));
const EditProfilePage = React.lazy(() => import("pages/EditProfilePage"));
const RankingsPage = React.lazy(() => import("pages/RankingsPage"));
const CollectionPage = React.lazy(() => import("pages/CollectionPage"));
const ItameDetailspage = React.lazy(() => import("pages/ItameDetailspage"));
const Livechatpage = React.lazy(() => import("pages/Livechatpage"));
const Languespage = React.lazy(() => import("pages/Languespage"));
const PopupProfilepage = React.lazy(() => import("pages/PopupProfilepage"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const FashionAvatarpage = React.lazy(() => import("pages/FashionAvatarpage"));
const NewPasswordpage = React.lazy(() => import("pages/NewPasswordpage"));
const VerificationCodepage = React.lazy(() =>
  import("pages/VerificationCodepage"),
);
const ForgetPasswordpage = React.lazy(() => import("pages/ForgetPasswordpage"));
const Registerpage = React.lazy(() => import("pages/Registerpage"));
const Loginpage = React.lazy(() => import("pages/Loginpage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/registerpage" element={<Registerpage />} />
          <Route path="/forgetpasswordpage" element={<ForgetPasswordpage />} />
          <Route
            path="/verificationcodepage"
            element={<VerificationCodepage />}
          />
          <Route path="/newpasswordpage" element={<NewPasswordpage />} />
          <Route path="/fashionavatarpage" element={<FashionAvatarpage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/popupprofilepage" element={<PopupProfilepage />} />
          <Route path="/languespage" element={<Languespage />} />
          <Route path="/livechatpage" element={<Livechatpage />} />
          <Route path="/itamedetailspage" element={<ItameDetailspage />} />
          <Route path="/collectionpage" element={<CollectionPage />} />
          <Route path="/rankingspage" element={<RankingsPage />} />
          <Route path="/editprofilepage" element={<EditProfilePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/careerspage" element={<Careerspage />} />
          <Route path="/casestudiespage" element={<CaseStudiespage />} />
          <Route
            path="/casestudiesdetailspage"
            element={<CaseStudiesDetailspage />}
          />
          <Route
            path="/explorcolloctionpage"
            element={<ExplorColloctionpage />}
          />
          <Route path="/userpage" element={<Userpage />} />
          <Route path="/aboutpage" element={<Aboutpage />} />
          <Route path="/mycartpage" element={<MyCartpage />} />
          <Route path="/mysavelistspage" element={<Mysavelistspage />} />
          <Route path="/walletpage" element={<Walletpage />} />
          <Route path="/projectofferspage" element={<ProjectOffersPage />} />
          <Route
            path="/projectanalyticspage"
            element={<ProjectAnalyticsPage />}
          />
          <Route
            path="/projectanalyticspageone"
            element={<ProjectAnalyticsPageOne />}
          />
          <Route path="/allnftspage" element={<AllNFTsPage />} />
          <Route path="/artpage" element={<ArtPage />} />
          <Route path="/collectiblespage" element={<CollectiblesPage />} />
          <Route path="/domainpage" element={<DomainPage />} />
          <Route path="/musicpage" element={<MusicPage />} />
          <Route path="/photographypage" element={<PhotographyPage />} />
          <Route path="/virtualworldpage" element={<VirtualWorldPage />} />
          <Route path="/sportspage" element={<SportsPage />} />
          <Route path="/tendingcardspage" element={<TendingCardsPage />} />
          <Route path="/utilitypage" element={<UtilityPage />} />
          <Route path="/fashionpage" element={<FashionPage />} />
          <Route path="/documentpage" element={<DocumentPage />} />
          <Route path="/offlinepage" element={<OfflinePage />} />
          <Route path="/helpcenterpage" element={<HelpCenterPage />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/createpage" element={<Createpage />} />
          <Route path="/nftgamepage" element={<NFTGamepage />} />
          <Route path="/termsofservicepage" element={<Termsofservicepage />} />
          <Route path="/rankingspageone" element={<RankingsPageOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
