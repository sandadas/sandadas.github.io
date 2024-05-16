﻿define({ entries : {
    "Alba2014": {
        "abstract": "Purpose Magnetic resonance imaging (MRI), specifically late\u2010enhanced MRI, is the standard clinical imaging protocol to assess cardiac viability. Segmentation of myocardial walls is a prerequisite for this assessment. Automatic and robust multisequence segmentation is required to support processing massive quantities of data. Methods A generic rule\u2010based framework to automatically segment the left ventricle myocardium is presented here. We use intensity information, and include shape and interslice smoothness constraints, providing robustness to subject\u2010 and study\u2010specific changes. Our automatic initialization considers the geometrical and appearance properties of the left ventricle, as well as interslice information. The segmentation algorithm uses a decoupled, modified graph cut approach with control points, providing a good balance between flexibility and robustness. Results The method was evaluated on late\u2010enhanced MRI images from a 20\u2010patient in\u2010house database, and on cine\u2010MRI images from a 15\u2010patient open access database, both using as reference manually delineated contours. Segmentation agreement, measured using the Dice coefficient, was 0.81\u00b10.05 and 0.92\u00b10.04 for late\u2010enhanced MRI and cine\u2010MRI, respectively. The method was also compared favorably to a three\u2010dimensional Active Shape Model approach. Conclusion The experimental validation with two magnetic resonance sequences demonstrates increased accuracy and versatility.",
        "author": "Alb\u00e0 X\u00e8nia, Figueras i Ventura Rosa M., Lekadir Karim, Tobon-Gomez Catalina, Hoogendoorn Corn\u00e9, Frangi Alejandro F.",
        "doi": "10.1002/mrm.25079",
        "journal": "Magnetic resonance in medicine",
        "keywords": "type:graph cut,magnetic resonance imaging, late-enhanced mag- netic resonance imaging, cardiac, myocardial segmentation, graph cut",
        "number": "09",
        "publisher": "HOBOKEN: Blackwell Publishing Ltd",
        "series": "MRM",
        "title": "Automatic Cardiac LV Segmentation in MRI Using Modified Graph Cuts with Smoothness and Interslice Constraints",
        "type": "article",
        "url": "https://onlinelibrary-wiley-com.nottingham.idm.oclc.org/doi/full/10.1002/mrm.25079",
        "volume": "72",
        "year": "2014"
    },
    "Brahim2022": {
        "abstract": "Accurate segmentation of the myocardial scar may supply relevant advancements in predicting and controlling deadly ventricular arrhythmias in subjects with cardiovascular disease. In this paper, we propose the architecture of inclusion and classification of prior information U-Net (ICPIU-Net) to efficiently segment the left ventricle (LV) myocardium, myocardial infarction (MI), and microvascular-obstructed (MVO) tissues from late gadolinium enhancement magnetic resonance (LGE-MR) images. Our approach was developed using two subnets cascaded to first segment the LV cavity and myocardium. Then, we used inclusion and classification constraint networks to improve the resulting segmentation of the diseased regions within the pre-segmented LV myocardium. This network incorporates the inclusion and classification information of the LGE-MRI to maintain topological constraints of pathological areas. In the testing stage, the outputs of each segmentation network obtained with specific estimated parameters from training were fused using the majority voting technique for the final label prediction of each voxel in the LGE-MR image. The proposed method was validated by comparing its results to manual drawings by experts from 50 LGE-MR images. Importantly, compared to various deep learning-based methods participating in the EMIDEC challenge, the results of our approach have a more significant agreement with manual contouring in segmenting myocardial diseases.",
        "author": "Brahim Khawla, Arega Tewodros Weldebirhan, Boucher Arnaud, Bricq Stephanie, Sakly Anis, Meriaudeau Fabrice",
        "doi": "10.3390/s22062084",
        "journal": "Sensors (Basel, Switzerland)",
        "keywords": "type:exploration of optimization,segmentation, ICPIU-Net, myocardium, myocardial infarction (MI), late gadolinium enhancement magnetic resonance (LGE-MR), microvascular-obstructed (MVO), deep learning",
        "number": "06",
        "publisher": "BASEL: Mdpi",
        "series": "Sensors",
        "title": "An Improved 3D Deep Learning-Based Segmentation of Left Ventricular Myocardial Diseases from Delayed-Enhancement MRI with Inclusion and Classification Prior Information U-Net (ICPIU-Net)",
        "type": "article",
        "url": "https://www.proquest.com/docview/2642482289?pq-origsite",
        "volume": "22",
        "year": "2022"
    },
    "Cheng2020": {
        "abstract": "Cardiac MRI segmentation plays a crucial role in clinical diagnosis for evaluating personalized cardiac performance parameters. Due to the indistinct boundaries and heterogeneous intensity distributions in the cardiac MRI, most existing methods still suffer from two aspects of challenges: inter-class indistinction and intra-class inconsistency. To tackle these two problems, we propose a novel method to exploit the directional feature maps, which can simultaneously strengthen the differences between classes and the similarities within classes. Specifically, we perform cardiac segmentation and learn a direction field pointing away from the nearest cardiac tissue boundary to each pixel via a direction field (DF) module. Based on the learned direction field, we then propose a feature rectification and fusion (FRF) module to improve the original segmentation features, and obtain the final segmentation. The proposed modules are simple yet effective and can be flexibly added to any existing segmentation network without excessively increasing time and space complexity. We evaluate the proposed method on the 2017 MICCAI Automated Cardiac Diagnosis Challenge (ACDC) dataset and a large-scale self-collected dataset, showing good segmentation performance and robust generalization ability of the proposed method.",
        "author": "Cheng Feng, Chen Cheng, Wang Yukang, Shi Heshui, Cao Yukun, Tu Dandan, Zhang Changzheng, Xu Yongchao",
        "doi": "10.48550/arxiv.2007.11349",
        "journal": "arXiv.org 2020-07",
        "keywords": "type:exploration of optimization, Cardiac Segmentation\uff0cDeep Learning\uff0cDirection Field.",
        "number": "04",
        "publisher": "Ithaca: Cornell University Library, arXiv.org",
        "series": "arXiv",
        "title": "Learning Directional Feature Maps for Cardiac MRI Segmentation",
        "type": "article",
        "url": "https://www.proquest.com/docview/2426384641?accountid",
        "volume": "1",
        "year": "2020"
    },
    "Haley2021": {
        "abstract": "Visualizing disease-induced scarring and fibrosis in the heart on cardiac magnetic resonance (CMR) imaging with contrast enhancement (LGE) is paramount in characterizing disease progression and quantifying pathophysiological substrates of arrhythmias. However, segmentation and scar/fibrosis identification from LGE-CMR is an intensive manual process prone to large inter-observer variability. Here, we present a novel fully-automated anatomically-informed deep learning solution for left ventricle (LV) and scar/fibrosis segmentation and clinical feature extraction from LGE-CMR. The technology involves three cascading convolutional neural networks that segment myocardium and scar/fibrosis from raw LGE-CMR images and constrain these segmentations within anatomical guidelines, thus facilitating seamless derivation of clinically-significant parameters. In addition to available LGE-CMR images, training used \"LGE-like\" synthetically enhanced cine scans. Results show excellent agreement with those of trained experts in terms of segmentation (balanced accuracy of 96% and 75% for LV and scar segmentation), clinical features (2% difference in mean scar-to-LV wall volume fraction), and anatomical fidelity. Our segmentation technology is extendable to other computer vision medical applications and to problems requiring guidelines adherence of predicted outputs. ,",
        "author": "Haley G. Abramson, Dan M. Popescu, Rebecca Yu, Changxin Lai, Julie K. Shade, Katherine C. Wu, Mauro Maggioni, Natalia A. Trayanova",
        "doi": "10.48550/arxiv.2010.11081",
        "journal": "arXiv:2010.11081",
        "keywords": "type:deep learning, Deep Learning, Cardiac MRI, Scar Segmentation, Feature Extraction",
        "number": "01",
        "publisher": "arXiv",
        "series": "arXiv",
        "title": "Anatomically-Informed Deep Learning on Contrast-Enhanced Cardiac MRI for Scar Segmentation and Clinical Feature Extraction",
        "type": "article",
        "url": "https://arxiv.org/abs/2010.11081",
        "volume": "01",
        "year": "2021"
    },
    "Lu2019": {
        "abstract": "It is important to segment the right ventricular structure on MR images for the quantitative evaluation of cardiac function. Some factors such as the distinct cavity border and the variable crescent shape bring the challenge to this task. To overcome these difficulties, a segmentation framework integrating graph cut with multi-scale feature learning is presented. Firstly, multi-scale image patches extracted from the training set are used to perform the supervised feature learning by stacked sparse auto-encoder. Secondly, the right ventricular structure is roughly located utilizing the estimated probability map for the testing set. Finally, a regularized energy function based on graph cut is optimized for segmentation refinement. A number of comparative experiments demonstrate the superiority of the proposed method in terms of segmentation accuracy.",
        "author": "Lu Xuesong, Chen Xiangan, Li Wei, Qiao Yuchuan",
        "doi": "10.1145/3309074.3309117",
        "journal": "ACM International Conference Proceeding Series",
        "keywords": "type:graph cut,Image segmentation; graph cut, the right ventricle, multi-scale feature learning",
        "number": "05",
        "publisher": "NEW YORK: Assoc Computing Machinery",
        "series": "ACM",
        "title": "Graph Cut Segmentation of the Right Ventricle in Cardiac MRI Using Multi-scale Feature Learning",
        "type": "article",
        "url": "https://www.proquest.com/docview/2426384641?accountid",
        "volume": "1",
        "year": "2019"
    },
    "Moccia2019": {
        "abstract": "Objective The aim of this paper is to investigate the use of fully convolutional neural networks (FCNNs) to segment scar tissue in the left ventricle from cardiac magnetic resonance with late gadolinium enhancement (CMR-LGE) images. Methods A successful FCNN in the literature (the ENet) was modified and trained to provide scar-tissue segmentation. Two segmentation protocols (Protocol 1 and Protocol 2) were investigated, the latter limiting the scar-segmentation search area to the left ventricular myocardial tissue region. CMR-LGE from 30 patients with ischemic-heart disease were retrospectively analyzed, for a total of 250 images, presenting high variability in terms of scar dimension and location. Segmentation results were assessed against manual scar-tissue tracing using one-patient-out cross validation. Results Protocol 2 outperformed Protocol 1 significantly ( p value < 0.05), with median sensitivity and Dice similarity coefficient equal to 88.07% [inter-quartile range (IQR) 18.84%] and 71.25% (IQR 31.82%), respectively. Discussion Both segmentation protocols were able to detect scar tissues in the CMR-LGE images but higher performance was achieved when limiting the search area to the myocardial region. The findings of this paper represent an encouraging starting point for the use of FCNNs for the segmentation of nonviable scar tissue from CMR-LGE images.",
        "author": "Moccia Sara, Banali Riccardo, Martini Chiara, Muscogiuri Giuseppe, Pontone Gianluca, Pepi Mauro, Caiani Enrico Gianluca",
        "doi": "10.1007/s10334-018-0718-4",
        "journal": "Magma (New York, N.Y.)",
        "keywords": "type:deep learning,Scar segmentation, Deep learning, Fully-convolutional neural networks, CMR-LGE images",
        "number": "07",
        "publisher": "Cham: Springer International Publishing",
        "series": "Magma",
        "title": " Development and testing of a deep learning\u2010based strategy for scar segmentation on CMR\u2010LGE images",
        "type": "article",
        "url": "https://link-springer-com.nottingham.idm.oclc.org/article/10.1007/s10334-018-0718-4",
        "volume": "32",
        "year": "2019"
    },
    "Patil2023": {
        "abstract": "The emergence of various deep learning approaches in diagnostic medical image segmentation has made machines capable of accomplishing human-level accuracy. However, the generalizability of these architectures across patients from different countries, Magnetic Resonance Imaging (MRI) scans from distinct vendors, and varying imaging conditions remains questionable. In this work, we propose a translatable deep learning framework for diagnostic segmentation of cine MRI scans. This study aims to render the available SOTA (state-of-the-art) architectures domain-shift invariant by utilizing the heterogeneity of multi-sequence cardiac MRI. To develop and test our approach, we curated a diverse group of public datasets and a dataset obtained from private source. We evaluated 3 SOTA CNN (Convolution neural network) architectures i.e., U-Net, Attention-U-Net, and Attention-Res-U-Net. These architectures were first trained on a combination of three different cardiac MRI sequences. Next, we examined the M&M (multi-center & mutli-vendor) challenge dataset to investigate the effect of different training sets on translatability. The U-Net architecture, trained on the multi-sequence dataset, proved to be the most generalizable across multiple datasets during validation on unseen domains. This model attained mean dice scores of 0.81, 0.85, and 0.83 for myocardial wall segmentation after testing on unseen MyoPS (Myocardial Pathology Segmentation) 2020 dataset, AIIMS (All India Institute of Medical Sciences) dataset and M&M dataset, respectively. Our framework achieved Pearson\u2019s correlation values of 0.98, 0.99, and 0.95 between the observed and predicted parameters of end diastole volume, end systole volume, and ejection fraction, respectively, on the unseen Indian population dataset.",
        "author": "Patil Sanjeet S., Ramteke Manojkumar, Verma Mansi, Seth Sandeep, Bhargava Rohit, Mittal Shachi, Rathore Anurag S.",
        "doi": "10.1007/s10278-023-00873-2",
        "journal": "Journal of digital imaging",
        "keywords": "type:exploration of optimization,Cardiac magnetic resonance imaging, Deep learning, Semantic segmentation, Convolutional neural networks, Generalizable architecture",
        "number": "10",
        "publisher": "Cham: Springer International Publishing",
        "series": "Cham",
        "title": "A Domain-Shift Invariant CNN Framework for Cardiac MRI Segmentation Across Unseen Domains",
        "type": "article",
        "url": "https://link-springer-com.nottingham.idm.oclc.org/article/10.1007/s10278-023-00873-2",
        "volume": "36",
        "year": "2023"
    },
    "Wang2021": {
        "abstract": "Background: The segmentation of cardiac medical images is a crucial step for calculating clinical indices such as wall thickness, ventricular volume, and ejection fraction. Methods: In this study, we introduce a method named LsUnet that combines multi-channel, fully convolutional neural network, and annular shape level-set methods for efficiently segmenting cardiac cine magnetic resonance (MR) images. In this method, the multi-channel deep learning algorithm is applied to train the segmentation task to extract the left ventricle (LV) endocardial and epicardial contours. Next, the segmentation contours from the multi-channel deep learning method are incorporated into a level-set formulation, which is dedicated explicitly to detecting annular shapes to assure the segmentation's accuracy and robustness. Results: The proposed automatic approach was evaluated on 95 volumes (total 1,076 slices,-80% as for training datasets,-20% 2D as for testing datasets). This combined multi-channel deep learning and annular shape level-set segmentation method achieved high accuracy with average Dice values reaching 92.15% and 95.42% for LV endocardium and epicardium delineation, respectively, in comparison to the reference standard (the manual segmentation). Conclusions: A novel method for fully automatic segmentation of the LV endocardium and epicardium from different MRI datasets is presented. The proposed workflow is accurate and robust compared to the reference and other state-of-the-art methods.",
        "author": "Wang Yan, Zhang Yue, Wen Zhaoying, Tian Bing, Kao Evan, Liu Xinke, Xuan Wanling, Ordovas Karen, Saloner David, Liu Jing",
        "doi": "10.21037/qims-20-169",
        "journal": "Quantitative imaging in medicine and surgery",
        "keywords": "type:deep learning,Deep learning, left ventricle segmentation (LV segmentation), wall thickness",
        "number": "03",
        "publisher": "SHATIN: AME PUBLISHING COMPANY",
        "series": "QIMS",
        "title": "Deep learning based fully automatic segmentation of the left ventricular endocardium and epicardium from cardiac cine MRI",
        "type": "article",
        "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7930660/",
        "volume": "11",
        "year": "2021"
    },
    "Wang2022": {
        "abstract": "With the development of deep learning network models, the automatic segmentation of medical images is becoming increasingly popular. Left ventricular cavity segmentation is an important step in the diagnosis of cardiac disease, but post-processing segmentation is a time-consuming and challenging task. That is why a fully automated segmentation method can assist specialists in increasing their efficiency. Inspired by the power of deep neural networks, a multi-scale multi-skip connection network (MMNet) model is proposed to fully automate the left ventricular segmentation of cardiac magnetic resonance imaging (MRI) images; this model is simple and efficient and has high segmentation accuracy without pre-detecting left ventricular localization. MMNet redesigns the classic encoder and decoder to take advantage of multi-scale feature information, effectively solving the problem of difficult segmentation due to blurred left ventricular edge information and the low accuracy of end-systolic segmentation of the cardiac area. In the model encoding stage, a multi-scale feature fusion module applying dilated convolution is proposed to obtain richer semantic information from different perceptual fields. The decoding stage reconstructs the full-size skip connection structure to make full use of the feature information obtained from different layers for contextual semantic information fusion. At the same time, a pre-activation module is used before each weighting layer to prevent overfitting phenomena from arising. The experimental results demonstrate that the proposed model has better segmentation performance than advanced benchmark models. Ablation experiments show that the proposed modules are effective at improving segmentation results. Therefore, MMNet is a promising approach for the left ventricular fully automated segmentation.",
        "author": "Wang Ziyue, Peng Yanjun, Li Dapeng, Guo Yanfei, Zhang Bin",
        "doi": "10.1007/s10489-021-02720-9",
        "journal": "Springer:Jisc Collections:SpringerCompact Journals Agreement",
        "keywords": "type:deep learning, Left Ventricular Segmentation, MMNet, MRI, Automated Segmentation",
        "number": "02",
        "publisher": "New York: Springer US",
        "series": "SCJA",
        "title": "MMNet: A multi-scale deep learning network for the left ventricular segmentation of cardiac MRI images",
        "type": "article",
        "url": "https://link.springer.com/article/10.1007/s10489-021-02720-9",
        "volume": "52",
        "year": "2022"
    },
    "Zabihollahy2020": {
        "abstract": "Purpose of Review Myocardial fibrosis (MF) arises due to myocardial infarction and numerous cardiac diseases. MF may lead to several heart disorders, such as heart failure, arrhythmias, and ischemia. Cardiac magnetic resonance (CMR) imaging techniques, such as late gadolinium enhancement (LGE) CMR, enable non-invasive assessment of MF in the left ventricle (LV). Manual assessment of MF on CMR is a tedious and time-consuming task that is subject to high observer variability. Automated segmentation and quantification of MF is important for risk stratification and treatment planning in patients with heart disorders. This article aims to review the machine learning (ML)-based methodologies developed for MF quantification in the LV using CMR images. Recent Findings With the availability of relatively large labeled datasets supervised learning methods based on both conventional ML and state-of-the-art deep learning (DL) methods have been successfully applied for automated segmentation of MF. The incorporation of ML algorithms into imaging techniques such as 3D LGE CMR permits fast characterization of MF on CMR imaging and may enhance the diagnosis and prognosis of patients with heart disorders. Concurrently, the studies using cine CMR images have revealed that accurate segmentation of MF on non-contrast CMR imaging might be possible. Summary The application of ML/DL tools in CMR image interpretation is likely to result in accurate and efficient quantification of MF.",
        "author": "Zabihollahy Fatemeh, Rajan S., Ukwatta E.",
        "doi": "10.1007/s11886-020-01321-1",
        "journal": "Current cardiology reports",
        "keywords": "type:deep learning, Myocardial fibrosis,Cardiac magnetic resonance imaging, Late gadolinium enhancement, Machine learning, Deep learning",
        "number": "08",
        "publisher": "New York: Springer US",
        "series": "CCR",
        "title": "Machine Learning-Based Segmentation of Left Ventricular Myocardial Fibrosis from Magnetic Resonance Imaging",
        "type": "article",
        "url": "https://link-springer-com.nottingham.idm.oclc.org/article/10.1007/s11886-020-01321-1",
        "volume": "22",
        "year": "2020"
    }
}});